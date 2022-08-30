const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

// Validation for user
exports.signUp = (User) => {
  const schema = Joi.object({
    firstName: Joi.string().alphanum().max(40).required().messages({
      'string.alphanum':
        'First Name must only contain alpha-numeric characters',
      'string.empty': 'First name is required',
    }),

    lastName: Joi.string().alphanum().max(50).required().messages({
      'string.alphanum': 'Last Name must only contain alpha-numeric characters',
      'string.empty': 'Last name is required',
    }),
    email: Joi.string()
      .email()
      .required()
      .error(new Error('email must be a valid email')),

    password: Joi.string()
      .min(6)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      .required()
      .messages({
        'string.empty': 'Password is required',
        'string.min':
          'Password must contain at least 8 letters one uppercase letter, one lowercase letter, one number and one special character',
        'string.pattern.base':
          'Password must contain at least 8 letters one uppercase letter, one lowercase letter, one number and one special character',
      })
  }).options({ allowUnknown: true });
  return schema.validate(User);
};

// Validation for user
exports.login = (User) => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required()
      .error(new Error('email must be a valid email')),

    password: Joi.string()
      .min(6)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      .required()
      .messages({
        'string.empty': 'Password is required',
        'string.min':
          'Password must contain at least 8 letters one uppercase letter, one lowercase letter, one number and one special character',
        'string.pattern.base':
          'Password must contain at least 8 letters one uppercase letter, one lowercase letter, one number and one special character',
      }),
  });
  return schema.validate(User);
};