const post = require('../Models/postSchema');

const deletePost = async (req, res, next) => {
    try {
        const delPost = await post.findByIdAndDelete(req.params.id)
        if(!delPost) return res.status(400).send("error deleting specified post")
        res.status(200).send("Post successfully deleted!!")

    } catch (error) {
        console.log(error)
        res.status(400).send("error deleting specified post")
    }
}

module.exports = deletePost