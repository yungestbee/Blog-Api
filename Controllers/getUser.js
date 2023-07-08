const user = require('../Models/userSchema');


const getUser=async (req, res, next)=>{
    try {
        const sinUser = await user.findById(req.params.id)
        console.log(sinUser)
        if(!sinUser) return res.status(400).send("error fetching specified user")
        res.status(200).send(sinUser)
        
    } catch (error) {
        res.status(400).send("error fetching specified user")
    }
}

module.exports=getUser