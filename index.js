const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017');
mongoose.connection.on('error', (error) => console.error('Error connecting to database:', error));
mongoose.connection.once('open', () => console.log('Connected to database'));

const authRoutes = require('./Routes/auth');
const productRoutes = require('./Routes/product');
app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);

// Start the server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
