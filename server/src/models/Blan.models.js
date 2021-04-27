const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const blanSchema = Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model('blan', blanSchema);
