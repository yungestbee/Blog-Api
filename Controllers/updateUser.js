const user = require('../Models/userSchema');

const updateUser = async (req, res, next) => {
    // const {error, value} = req.body
    // console.log(req.body)
    // console.log(req.params.id)
    const check = req.body
    try {
        const upUser = await user.findById(req.params.id)
        console.log(upUser)
        if(!upUser) return res.status(400).send("error updating user profile")
        const emmanuel = await user.updateOne({_id:req.params.id}, {$set:{check}})
        // const updated = await user.findById(req.params.id)
        res.status(200).send(emmanuel)

    } catch (error) {
        res.status(400).send("error updating user profile")
    }
}

module.exports = updateUser