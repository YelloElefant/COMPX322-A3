const express = require('express');
const cors = require('cors');
const path = require('path');
const projectHandlers = require('./projects');

const app = express();
const PORT = 3223;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.post('/projects', projectHandlers.createProject);
app.get('/projects', projectHandlers.getAllProjects);
app.get('/projects/:id', projectHandlers.getProjectById);
app.get('/projects/name/:name', projectHandlers.getProjectByName);
app.put('/projects/:id', projectHandlers.updateProjectById);
app.delete('/projects/:id', projectHandlers.deleteProjectById);
app.delete('/projects', projectHandlers.deleteAllProjects);

// Start server
app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});
