import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt:{
    type:Date,
    default:new Date()
  }
});
const PostMessage=mongoose.model('PostMessage',userSchema);
export default PostMessage;