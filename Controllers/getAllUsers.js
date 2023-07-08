const user = require('../Models/userSchema');

const getAllUsers = async(req, res, next)=>{
    try {
        const getAll = await user.find({});
        res.status(200).send(getAll)
    } catch (error) {
        console.log(error)
        res.status(400).send("error fetching users' profiles!!!")
    }
     
}
module.exports = getAllUsers