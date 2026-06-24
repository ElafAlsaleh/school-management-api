const express = require('express');
const app = express();
const PORT = 3000;
const createTables = require('./database');
createTables();

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/courses', require('./routes/courses'));
app.use('/lessons', require('./routes/lessons'));
app.use('/contents', require('./routes/contents'));
app.use('/grades', require('./routes/grades'));
app.use('/messages', require('./routes/messages'));

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
