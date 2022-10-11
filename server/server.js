require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const cors = require('cors');
const path = require('path');
connectDB();

// Error Handler Middleware

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

// routes
const invoice = require('./Routes/invoice');
const user = require('./Routes/auth');
const private = require('./Routes/private');
const getUser = require('./Routes/getUsers');
const invoiceTemplate = require('./Routes/invoiceTemplate');
const port = process.env.PORT;
//endpoint
app.use('/api/generate-invoice', invoice);
app.use('/api/auth', user);
app.use('/api/private', private);
app.use('/api/acc', getUser);
app.use('/api/invoice-template', invoiceTemplate);
//middleware
app.use(express.static(path.join(__dirname, './build')));
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  //server.close(() => process.exit(1));
});
