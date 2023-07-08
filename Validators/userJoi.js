const joi = require("joi");

const userJoi = joi.object({
    username: joi.string().required(),
    password: joi.string().required().min(8)
})

module.exports = userJoi