require('dotenv').config(); // 👈 load .env variables at top

const express = require('express');
const app = express();

// define routes
const landingRoute = require('./routes/landingRoute');
const userRoutes = require('./routes/userRoutes');
const expertsRoutes = require('./routes/expertsRoutes');

const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', landingRoute);
app.use('/users', userRoutes);
app.use('/experts', expertsRoutes);

module.exports = app;

