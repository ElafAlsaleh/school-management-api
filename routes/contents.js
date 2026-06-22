const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all content
router.get('/', (req, res) => {
  db.query('SELECT * FROM content', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});

// POST new content
router.post('/', (req, res) => {
  const { title, type, file_path, lesson_id } = req.body;

  db.query(
    'INSERT INTO content (title, type, file_path, lesson_id) VALUES (?, ?, ?, ?)',
    [title, type, file_path, lesson_id],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      res.status(201).json({
        content_id: result.insertId,
        title,
        type,
        file_path,
        lesson_id
      });
    }
  );
});

// DELETE content
router.delete('/:id', (req, res) => {
  db.query(
    'DELETE FROM content WHERE content_id = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'Content not found' });

      res.json({ message: 'Content deleted successfully' });
    }
  );
});

module.exports = router;
