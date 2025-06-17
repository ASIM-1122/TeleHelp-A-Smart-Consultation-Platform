const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Landing Page');
});

module.exports = router;
// This file defines a simple route for the landing page.
// It uses Express to create a router that responds with "Landing Page" when the root URL is accessed.