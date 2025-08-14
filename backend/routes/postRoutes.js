import express from "express";

const router = express.Router();

router.route("/").get(); // Route to get all posts
router.route("/:id").get(); // Route to get a single post by ID
router.route("/").post(); // Route to create a new post
