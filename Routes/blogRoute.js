const express = require("express");
const createPost = require("../Controllers/createPost");
const createUser = require("../Controllers/createUser");
const login = require("../Controllers/login");
const getAllPosts = require("../Controllers/getAllPosts");
const { verifyToken } = require("../Middlewares/verifyToken");
const getPost = require("../Controllers/getpost");
const updatePost = require("../Controllers/updatePost");
const deletePost = require("../Controllers/deletePost");
const getAllUsers = require("../Controllers/getAllUsers");
const getUser = require("../Controllers/getUser");
const updateUser = require("../Controllers/updateUser");

const router = express.Router();

router.post("/api/auth/register", createUser);

router.post("/api/auth/login", login);

router.get("/api/posts", verifyToken, getAllPosts);

router.post("/api/posts", verifyToken, createPost);

router.get("/api/posts/:id", verifyToken, getPost);

router.put("/api/posts/:id", verifyToken,updatePost);

router.delete("/api/posts/:id", verifyToken,deletePost);

router.get("/api/users", verifyToken,getAllUsers);

router.get("/api/users/:id", verifyToken,getUser);

router.put("/api/users/:id", verifyToken,updateUser);

module.exports = router
