const joi = require("joi");

const userJoi = joi.object({
    username: joi.string().required().min(5).messages({
        'string.base': `"username" should be a type of 'text'`,
        'string.empty': `"username" cannot be an empty field`,
        'string.min': `"username" should have a minimum length of {#limit}`,
        'any.required': `"username" is a required field`
      }),
    password: joi.string().required().min(8).messages({
        'string.base': `"password" should be a type of 'text'`,
        'string.empty': `"password" cannot be an empty field`,
        'string.min': `"password" should have a minimum length of {#limit}`,
        'any.required': `"password" is a required field`
      })
})

module.exports = userJoi