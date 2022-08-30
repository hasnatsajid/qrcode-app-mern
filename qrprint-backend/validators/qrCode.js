const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// Validation for user
exports.qrCode = (User) => {
  const schema = Joi.object({
     ssid: Joi.string().required().messages({'string.empty': 'ssid is required'}),
     password: Joi.string().min(8).max(50).required(),
     hiddenSSID: Joi.boolean().required(),
     encryption: Joi.string().required().messages({'string.empty': 'hiddenSSID is required'})
  }).options({ allowUnknown: true });
  return schema.validate(User);
};
