const mongoose = require('mongoose');

const ResponderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['Available', 'Busy'], default: 'Available' },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
});

module.exports = mongoose.model('Responder', ResponderSchema);
