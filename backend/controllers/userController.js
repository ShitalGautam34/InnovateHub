import User from "../models/User.js";

export const signup = async (req, res) => {
  const { username, email, password, role, niche } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists with this email", email });
    }

    const newUser = new User({
      username,
      email,
      password,
      role,
      niche,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log("Error in userController/signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.log("Error in userController/login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in userController/getCurrentUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getFunders = async (req, res) => {
  try {
    const funders = await User.find({ role: "funder" }).select("-password");
    res.status(200).json(funders);
  } catch (error) {
    console.log("Error in userController/getFunders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
