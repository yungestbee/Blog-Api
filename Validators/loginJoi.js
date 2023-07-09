const joi = require("joi");

const loginJoi = joi.object({
    username: joi.string().required().messages({
        'string.base': `"username" should be a type of 'text'`,
        'string.empty': `"username" cannot be an empty field`,
        'any.required': `"username" is a required field`
      }),
    password: joi.string().required().messages({
        'string.base': `"password" should be a type of 'text'`,
        'string.empty': `"password" cannot be an empty field`,
        'any.required': `"password" is a required field`
      })
})

module.exports = loginJoi