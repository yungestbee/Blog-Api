const post = require('../Models/postSchema');

const getAllPosts = async(req, res, next)=>{
    try {
        const getAll = await post.find({user_id:req.user.username});
        console.log(req.user.username)
        console.log(getAll)
        res.status(200).send(getAll)
    } catch (error) {
        console.log(error)
        res.status(400).send("error fetching posts")
    }
     
}
module.exports = getAllPosts