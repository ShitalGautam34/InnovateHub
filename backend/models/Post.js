import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  founderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fundersOnly: {
    type: Boolean,
    default: false,
  },
  ytURL: {
    type: String,
  },
  thumbnailId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Thumbnail",
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 10,
  },
  ratingCount: {
    type: Number,
    default: 0,
  },
  upVotes: {
    type: Number,
    default: 0,
  },
  downVotes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
