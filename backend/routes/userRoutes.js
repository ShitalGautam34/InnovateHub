import express from "express";
// Import user controller functions
import {
  signup,
  login,
  getMe,
  getFunders,
} from "../controllers/userController.js";

const router = express.Router();
router.route("/signup").post(signup); // Route for user signup
router.route("/login").post(login); // Route for user login
router.route("/me").get(getMe); // Route to get current user details
router.route("/funders").get(getFunders); // Route to get all funders

export default router;
