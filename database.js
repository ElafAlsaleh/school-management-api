const db = require('./db');
const usersTable = `
  CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL
  );
`;
const coursesTable = `
  CREATE TABLE IF NOT EXISTS courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    instructor_id INT,
    FOREIGN KEY (instructor_id) REFERENCES users(user_id)
  );
`;
const lessonsTable = `
  CREATE TABLE IF NOT EXISTS lessons (
    lesson_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
  );
`;
const contentsTable = `
  CREATE TABLE IF NOT EXISTS contents (
    content_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200),
    type VARCHAR(50),
    file_path TEXT,
    lesson_id INT,
    FOREIGN KEY (lesson_id) REFERENCES lessons(lesson_id)
  );
`;
const gradesTable = `
  CREATE TABLE IF NOT EXISTS grades (
    grade_id INT AUTO_INCREMENT PRIMARY KEY,
    grade DECIMAL(5,2),
    course_id INT,
    student_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    FOREIGN KEY (student_id) REFERENCES users(user_id)
  );
`;
const messagesTable = `
  CREATE TABLE IF NOT EXISTS messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES users(user_id)
  );
`;
function createTables() {
  db.query(usersTable, err => {
    if (err) console.log("Error creating users table:", err);
    else console.log("Users table ready");
  });

  db.query(coursesTable, err => {
    if (err) console.log("Error creating courses table:", err);
    else console.log("Courses table ready");
  });

  db.query(lessonsTable, err => {
    if (err) console.log("Error creating lessons table:", err);
    else console.log("Lessons table ready");
  });

  db.query(contentsTable, err => {
    if (err) console.log("Error creating contents table:", err);
    else console.log("Contents table ready");
  });

  db.query(gradesTable, err => {
    if (err) console.log("Error creating grades table:", err);
    else console.log("Grades table ready");
  });

  db.query(messagesTable, err => {
    if (err) console.log("Error creating messages table:", err);
    else console.log("Messages table ready");
  });
}
module.exports = createTables;
