const post = require('../Models/postSchema');

const updatePost = async (req, res, next) => {
    // const {error, value} = req.body
    const check = req.body
    console.log(check)
    try {
        const upPost = await post.findByIdAndUpdate(req.params.id, {$set:check})
        if(!upPost) return res.status(400).send("error updating specified post")
        const updated = await post.findById(req.params.id)
        res.status(200).send(updated)

    } catch (error) {
        res.status(400).send("error updating specified post")
    }
}

module.exports = updatePost