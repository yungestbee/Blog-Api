const joi = require("joi");

const postJoi = joi.object({
    title: joi.string().required(),
    content: joi.string().required()
})

module.exports = postJoi