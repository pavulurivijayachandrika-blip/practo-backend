const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  fee: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/120'
  },
  hospital: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Doctor', doctorSchema);