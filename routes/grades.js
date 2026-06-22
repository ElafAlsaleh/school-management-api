const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all grades
router.get('/', (req, res) => {
  db.query('SELECT * FROM grade', (err, results) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json(results);
  });
});

// POST new grade
router.post('/', (req, res) => {
  const { student_id, course_id, grade } = req.body;

  db.query(
    'INSERT INTO grade (student_id, course_id, grade) VALUES (?, ?, ?)',
    [student_id, course_id, grade],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      res.status(201).json({
        grade_id: result.insertId,
        student_id,
        course_id,
        grade
      });
    }
  );
});

// DELETE grade
router.delete('/:id', (req, res) => {
  db.query(
    'DELETE FROM grade WHERE grade_id = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });

      if (result.affectedRows === 0)
        return res.status(404).json({ message: 'Grade not found' });

      res.json({ message: 'Grade deleted successfully' });
    }
  );
});

module.exports = router;
