const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all courses
router.get('/', (req, res) => {
  db.query('SELECT * FROM course', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});

// POST new course
router.post('/', (req, res) => {
  const { title, description, instructor_id } = req.body;

  db.query(
    'INSERT INTO course (title, description, instructor_id) VALUES (?, ?, ?)',
    [title, description, instructor_id],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      res.status(201).json({
        course_id: result.insertId,
        title,
        description,
        instructor_id
      });
    }
  );
});

// DELETE course
router.delete('/:id', (req, res) => {
  db.query(
    'DELETE FROM course WHERE course_id = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'Course not found' });

      res.json({ message: 'Course deleted successfully' });
    }
  );
});

module.exports = router;
