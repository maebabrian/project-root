const express = require('express');
const router = express.Router();
const { getIncidents, createIncident } = require('../controllers/IncidentController');
const { authMiddleware, roleMiddleware } = require('../middlewares/auth');
const { validateIncident } = require('../middlewares/validation');

// Incident Routes

// GET /incidents: Fetch all incidents
router.get('/incidents', 
  authMiddleware, 
  roleMiddleware(['Admin', 'Responder']), 
  getIncidents
);

// POST /incidents: Create a new incident
router.post('/incidents', 
  authMiddleware, 
  roleMiddleware(['Admin']), 
  validateIncident, 
  createIncident
);

module.exports = router;
