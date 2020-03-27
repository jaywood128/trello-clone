const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Databse

connectDB();

app.get('/', (req, res) => res.send('Api running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/boards', require('./routes/api/boards'));

// Init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
