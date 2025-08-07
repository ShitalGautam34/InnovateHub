import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, default: "user", enum: ["user", "admin"] },
  profile: {
    bio: { type: String },
    main_niche: { type: mongoose.Schema.Types.ObjectId, ref: "Niche" },
    joined_at: { type: Date, default: Date.now },
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

const User = mongoose.model("User", UserSchema);

export default User;
