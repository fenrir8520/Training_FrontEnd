const express = require('express');
const path = require('path');
const glob = require('glob');
const testRouter = require('./routes');

const app = express();
//
app.get('/', () => {
    console.log('root');
})
app.use('/', testRouter);
//
app.listen(3001, () => {
    console.log('server start');
});
