import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    blogId: { type: Number, required: true, unique: false },
    nickname: { type: String, required: true, unique: false },
    comment: { type: String, required: true, unique: false },
});

export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema);