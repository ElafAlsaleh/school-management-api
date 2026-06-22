const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all messages
router.get('/', (req, res) => {
  db.query('SELECT * FROM message', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});

// POST new message
router.post('/', (req, res) => {
  const { sender_id, receiver_id, content } = req.body;

  db.query(
    'INSERT INTO message (sender_id, receiver_id, content) VALUES (?, ?, ?)',
    [sender_id, receiver_id, content],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      res.status(201).json({
        message_id: result.insertId,
        sender_id,
        receiver_id,
        content
      });
    }
  );
});

// DELETE message
router.delete('/:id', (req, res) => {
  db.query(
    'DELETE FROM message WHERE message_id = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'Message not found' });

      res.json({ message: 'Message deleted successfully' });
    }
  );
});

module.exports = router;
