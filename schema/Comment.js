import { Gif } from "@giphy/react-components";
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    blogId: { type: Number, required: true, unique: false },
    nickname: { type: String, required: true, unique: false },
    comment: { type: String, required: false, unique: false },
    gifId: { type: String, required: false, unique: false },
    time: ({ type: Date, default: Date.now }),
});

export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema);