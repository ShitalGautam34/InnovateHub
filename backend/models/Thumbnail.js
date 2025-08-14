import mongoose from "mongoose";

const ThumbnailSchema = new mongoose.Schema({
  data: {
    type: Buffer,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
});

const Thumbnail = mongoose.model("Thumbnail", ThumbnailSchema);
export default Thumbnail;
