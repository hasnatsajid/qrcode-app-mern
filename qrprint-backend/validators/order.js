const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// Validation for user
exports.order = (User) => {
  const schema = Joi.object({
     firstName: Joi.string().required().messages({'string.empty': 'firstName is required'}),
     lastName: Joi.string().required().messages({'string.empty': 'lastName is required'}),
     email: Joi.string().required().messages({'string.empty': 'email is required'}),
     phone: Joi.string().required().messages({'string.empty': 'phone is required'}),
     city: Joi.string().required().messages({'string.empty': 'city is required'}),
     state: Joi.string().required().messages({'string.empty': 'state is required'}),
     zipCode: Joi.string().required().messages({'string.empty': 'zipCode is required'}),
     address: Joi.string().required().messages({'string.empty': 'address is required'}),
     amount: Joi.string().required().messages({'string.empty': 'amount is required'}),
     qrImageLink: Joi.string().required().messages({'string.empty': 'qrImageLink is required'}),
     paymentId: Joi.string().required().messages({'string.empty': 'paymentId is required'}),
     status: Joi.string().required().messages({'string.empty': 'status is required'}),
      }).options({ allowUnknown: true });
  return schema.validate(User);
};
