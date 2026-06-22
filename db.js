const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Laragon ما يحط كلمة مرور
  database: 'school_system'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL via Laragon ✔');
  }
});

module.exports = db;
