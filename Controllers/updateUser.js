const user = require('../Models/userSchema');

const updateUser = async (req, res, next) => {
    // const {error, value} = req.body
    const check = req.body
    console.log(check)
    try {
        const upUser = await user.findByIdAndUpdate(req.params.id, {$set:check})
        if(!upUser) return res.status(400).send("error updating user profile")
        const updated = await user.findById(req.params.id)
        res.status(200).send(updated)

    } catch (error) {
        res.status(400).send("error updating user profile")
    }
}

module.exports = updateUser