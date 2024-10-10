require('dotenv').config();

const express = require("express");
const app = express();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { notFound, globalErrorHandler } = require('./middleware/GlobalErrorHanlder');

// Connect to the database
connectDB();

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// CORS configuration
app.use(cors({
    origin: [process.env.FRONT_END_DOMAIN, process.env.FRONT_END_DOMAIN1,process.env.FRONT_END_DOMAIN2],
}));

// Routes
app.use("/api/users", userRoutes);


// Catch 404 and forward to error handler
app.use(notFound);

// Global error handler
app.use(globalErrorHandler);

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
