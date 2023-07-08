const express = require("express");
const app = express();
app.use(express.json());

const userJoi = require('../Validators/userJoi')
const bcrypt = require('bcrypt')
const user = require('../Models/userSchema')


const createUser = async (req, res)=>{
    const {error, value} = userJoi.validate(req.body);
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(value.password, salt)
        const User = user.create({
            username: value.username,
            password: hashedPassword
        })
        res.status(201).send(`User successfully created \n Welcome on Board ${value.username}`)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
    
}

module.exports = createUser