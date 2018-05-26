const express = require('express');
const path = require('path');
const glob = require('glob');
const testRouter = require('./routes/test.js');

const app = express();
//
app.use('/', testRouter);
//
app.listen( ()=>{
    console.log('server start');
});

console.log('help');
