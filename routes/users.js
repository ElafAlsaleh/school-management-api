const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all users
router.get('/', (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});

// POST new user
router.post('/', (req, res) => {
  const { username, email, role } = req.body;

  db.query(
    'INSERT INTO user (username, email, role) VALUES (?, ?, ?)',
    [username, email, role],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      res.status(201).json({
        user_id: result.insertId,
        username,
        email,
        role
      });
    }
  );
});

// DELETE user
router.delete('/:id', (req, res) => {
  db.query(
    'DELETE FROM user WHERE user_id = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'User not found' });

      res.json({ message: 'User deleted successfully' });
    }
  );
});

module.exports = router;
