const Incident = require('../models/Incident');

exports.getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.status(200).json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching incidents' });
  }
};

exports.createIncident = async (req, res) => {
  try {
    const incident = new Incident(req.body);
    await incident.save();
    res.status(201).json(incident);
  } catch (error) {
    res.status(500).json({ error: 'Error creating incident' });
  }
};
