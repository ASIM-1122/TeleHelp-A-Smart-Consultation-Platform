const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Experts Page');
});

 module.exports = router;
// This file defines a simple route for the experts page.
// It uses Express to create a router that responds with "Experts Page" when the root URL is accessed.