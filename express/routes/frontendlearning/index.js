const express = require('express');
const app = express();
const router = express.Router();

const users = require('./users.js');

router.use('/frontendlearning',
    [users]
)

module.exports = router;
