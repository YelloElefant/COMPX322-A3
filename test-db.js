const db = require('./db');

db.query('SELECT 1 + 1 AS solution', (err, results) => {
   if (err) {
      console.error('Query failed:', err);
   } else {
      console.log('Database test successful. Result:', results[0].solution);
   }
   db.end(); // close the connection after test
});
