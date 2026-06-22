📚 School Management API
API لإدارة نظام مدرسي بسيط باستخدام Node.js + Express + MySQL (Laragon)  
المشروع يوفر CRUD كامل لكل من:
Users – Courses – Lessons – Contents – Grades – Messages

 Features
إدارة المستخدمين (طلاب – معلمين – إداريين)

إدارة الدورات التعليمية

إدارة الدروس

إدارة المحتوى (PDF – فيديو – ملفات)

إدارة الدرجات

نظام رسائل بسيط بين المستخدمين

هيكلة احترافية باستخدام Routes

اتصال مباشر مع MySQL عبر Laragon

🛠️ Technologies Used
Node.js

Express.js

MySQL

Laragon

Thunder Client / Postman

📁 Project Structure
كتابة تعليمات برمجية
my_node_server/
│
├── app.js
├── db.js
├── package.json
│
├── routes/
│   ├── users.js
│   ├── courses.js
│   ├── lessons.js
│   ├── contents.js
│   ├── grades.js
│   └── messages.js
│
└── README.md
🗄️ Database Schema (ERD)
User
user_id (PK)

username

email

role

Course
course_id (PK)

title

description

instructor_id (FK → user.user_id)

Lesson
lesson_id (PK)

title

course_id (FK → course.course_id)

Content
content_id (PK)

title

type

file_path

lesson_id (FK → lesson.lesson_id)

Grade
grade_id (PK)

student_id (FK → user.user_id)

course_id (FK → course.course_id)

grade

Message
message_id (PK)

sender_id (FK → user.user_id)

receiver_id (FK → user.user_id)

content

created_at

▶️ How to Run the Project
1️⃣ Install dependencies
كتابة تعليمات برمجية
npm install
2️⃣ Start Laragon
شغّل Apache + MySQL

افتح phpMyAdmin

أنشئ قاعدة بيانات باسم:

كتابة تعليمات برمجية
school_system
3️⃣ Run the server
كتابة تعليمات برمجية
node app.js
4️⃣ Server will run on:
كتابة تعليمات برمجية
http://localhost:3000
📌 API Endpoints
👤 Users
Method	Endpoint	Description
GET	/users	Get all users
POST	/users	Create new user
DELETE	/users/:id	Delete user


📘 Courses
Method	Endpoint	Description
GET	/courses	Get all courses
POST	/courses	Create new course
DELETE	/courses/:id	Delete course


📚 Lessons
Method	Endpoint	Description
GET	/lessons	Get all lessons
POST	/lessons	Create new lesson
DELETE	/lessons/:id	Delete lesson


📂 Contents
Method	Endpoint	Description
GET	/contents	Get all content
POST	/contents	Create new content
DELETE	/contents/:id	Delete content


📝 Grades
Method	Endpoint	Description
GET	/grades	Get all grades
POST	/grades	Add grade
DELETE	/grades/:id	Delete grade


💬 Messages
Method	Endpoint	Description
GET	/messages	Get all messages
POST	/messages	Send message
DELETE	/messages/:id	Delete message


🎯 Author
Elaf Alsaleh  
School Management API – 2026