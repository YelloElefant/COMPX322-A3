const db = require('./db');

// Create a new project
function createProject(req, res) {
   const { name, description } = req.body;
   const query = 'INSERT INTO projects (name, description) VALUES (?, ?)';
   db.query(query, [name, description], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, name, description });
   });
}

// Get all projects
function getAllProjects(req, res) {
   db.query('SELECT * FROM projects', (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(results);
   });
}

// Get project by ID
function getProjectById(req, res) {
   const { id } = req.params;
   db.query('SELECT * FROM projects WHERE id = ?', [id], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ error: 'Project not found' });
      res.status(200).json(results[0]);
   });
}

// Get project by name
function getProjectByName(req, res) {
   const { name } = req.params;
   db.query('SELECT * FROM projects WHERE name = ?', [name], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(results);
   });
}

// Update project by ID
function updateProjectById(req, res) {
   const { id } = req.params;
   const { name, description } = req.body;
   const query = 'UPDATE projects SET name = ?, description = ? WHERE id = ?';
   db.query(query, [name, description, id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ error: 'Project not found' });
      res.status(200).json({ message: 'Project updated' });
   });
}

// Delete project by ID
function deleteProjectById(req, res) {
   const { id } = req.params;
   db.query('DELETE FROM projects WHERE id = ?', [id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ error: 'Project not found' });
      res.status(200).json({ message: 'Project deleted' });
   });
}

// Delete all projects
function deleteAllProjects(req, res) {
   db.query('DELETE FROM projects', err => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ message: 'All projects deleted' });
   });
}

// Export all functions
module.exports = {
   createProject,
   getAllProjects,
   getProjectById,
   getProjectByName,
   updateProjectById,
   deleteProjectById,
   deleteAllProjects
};
