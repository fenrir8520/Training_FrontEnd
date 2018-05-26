const express = require('express');

const app = express();
const router = express.Router();

router.route('/test')
    .all((req, res, next) => {
        console.log('test_all');
        next();
    })
    .get((req, res, next) => {
        console.log('test');
        next();
    })

module.exports = router;
