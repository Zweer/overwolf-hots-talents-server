'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const HeroTalents = require('./herotalents');

module.exports = new Schema({
    username: {
        type: String,
        required: true
    },

    herotalents: [HeroTalents]
});