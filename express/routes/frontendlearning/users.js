const express = require('express');
const app = express();
const router = express.Router();

router.route('/users')
    .get((req, res, next) => {
        res.json(
            [
                {
                    id: 0,
                    name: '梨本',
                    sex: 0
                },
                {
                    id: 0,
                    name: '斎藤',
                    sex: 1
                },
                {
                    id: 0,
                    name: '小室',
                    sex: 1
                },
            ]
        )
        next();
    });

module.exports = router;
