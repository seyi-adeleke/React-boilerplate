//const path = require('path');
//const express = require('express');
import express from 'express';
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');

const app = express();

const port = 3000;

app.listen(port, () => { console.log(`App is listening on port ${port}`) });


// if(process.env.NODE_ENV === 'development') {
//     let compiler = webpack(webpackConfig);

//     app.use(require('webpack-dev-middleware')(compiler, {
//        noInfo: true, publicPath: webpackConfig.output.publicPath, stats: { colors: true }
//     }));
    
//     app.use(require('webpack-hot-middleware')(compiler));
// }

app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    res.send('hello');
 });
 
// app.use(express.static(path.resolve(__dirname, 'dist')));