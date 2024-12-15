const Joi = require('joi');

// Middleware for validating incident creation
const validateIncident = (req, res, next) => {
  const schema = Joi.object({
    type: Joi.string().required(),
    status: Joi.string().valid('Active', 'Resolved').required(),
    location: Joi.object({
      lat: Joi.number().required(),
      lng: Joi.number().required(),
    }).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validateIncident };
