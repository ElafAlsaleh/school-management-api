const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all lessons
router.get('/', (req, res) => {
  db.query('SELECT * FROM lesson', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});

// POST new lesson
router.post('/', (req, res) => {
  const { title, course_id } = req.body;

  db.query(
    'INSERT INTO lesson (title, course_id) VALUES (?, ?)',
    [title, course_id],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      res.status(201).json({
        lesson_id: result.insertId,
        title,
        course_id
      });
    }
  );
});

// DELETE lesson
router.delete('/:id', (req, res) => {
  db.query(
    'DELETE FROM lesson WHERE lesson_id = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'Lesson not found' });

      res.json({ message: 'Lesson deleted successfully' });
    }
  );
});

module.exports = router;
