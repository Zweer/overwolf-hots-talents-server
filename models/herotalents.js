'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },

    lvl1: Number,
    msg1: String,

    lvl4: Number,
    msg4: String,

    lvl7: Number,
    msg7: String,

    lvl10: Number,
    msg10: String,

    lvl13: Number,
    msg13: String,

    lvl16: Number,
    msg16: String,

    lvl20: Number,
    msg20: String
});