const post = require('../Models/postSchema');


const getPost=async (req, res, next)=>{
    try {
        const sinPost = await post.findById(req.params.id)
        if(!sinPost) return res.status(400).send("error fetching specified post")
        res.status(200).send(sinPost)
        
    } catch (error) {
        res.status(400).send("error fetching specified post")
    }
}

module.exports=getPost