const express = require("express");
const app = express();
app.use(express.json());

const postJoi = require('../Validators/userJoi')
const post = require('../Models/postSchema')

const createPost = async (req, res, next)=>{
    const {error, value} = postJoi.validate(req.body);
    const userId = req.user
    console.log(userId)
    try {
        const Post =await post.create({
            title: value.title,
            content: value.content,
            user_id: userId.username

        })
        res.status(201).send(Post)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
    
}

module.exports = createPost