const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Setting
app.set('PORT', process.env.PORT || 5000 );

// Database
require('./db/db');

// Routers
const userRouter = require('./routes/user');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Session

// Passport

// Api
app.use('/api/user', userRouter);

// Start Server
app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
});