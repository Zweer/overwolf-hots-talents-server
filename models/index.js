'use strict';

const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hots-talent');

const models = module.exports = {
    mongoose: mongoose
};

fs.readdirSync(__dirname)
    .filter(function (filename) {
        return filename.substr(-3) !== '.js' && filename !== 'index.js';
    })
    .forEach(function (filename) {
        const modelName = filename.replace('.js', '');

        models[modelName] = require(`./${filename}`);
    });