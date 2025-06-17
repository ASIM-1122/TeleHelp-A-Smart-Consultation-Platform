const express = require('express');
const server = require('./app'); // 👈 This separates routing/config logic
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// This is the entry point for the server application.
// It imports the Express app from app.js and starts the server on the specified port.