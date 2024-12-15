const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Resolved'], default: 'Active' },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Incident', IncidentSchema);
