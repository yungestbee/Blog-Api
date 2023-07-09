const loginJoi = require('../Validators/loginJoi');
const user = require('../Models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const secret = process.env.SECRET_KEY

const login = async (req, res)=>{
    const {error, value} = loginJoi.validate(req.body);
    // console.log(value)
    const log = await user.findOne({username: value.username})
    // console.log(log)
    if(log === null){
        res.status(400).send("invalid credentials")
    } else {
        try {
            const verify = await bcrypt.compare(value.password, log.password)
            if(!verify){
                res.status(400).send("invalid credentials")
            } else {
                const token = jwt.sign({username:log.username}, secret, {expiresIn: "5m"})
                res.status(200).send(`Welcome Back ${value.username} \n ${token}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = login

