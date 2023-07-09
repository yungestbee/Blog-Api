const joi = require("joi");

const postJoi = joi.object({
    title: joi.string().required().messages({
        'string.base': `"title" should be a type of 'text'`,
        'string.empty': `"title" cannot be an empty field`,
        'any.required': `"title" is a required field`
      }),
    content: joi.string().required().messages({
        'string.base': `"content" should be a type of 'text'`,
        'string.empty': `"content" cannot be an empty field`,
        'any.required': `"content" is a required field`
      }),
})

module.exports = postJoi