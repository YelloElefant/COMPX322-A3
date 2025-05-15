const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: '192.168.1.29',
   port: 3221,
   user: 'root',
   password: 'root',
   database: 'Assesment3'
});

connection.connect(err => {
   if (err) {
      console.error('Database connection failed:', err.stack);
      return;
   }
   console.log('Connected to MySQL database.');
});

module.exports = connection;
