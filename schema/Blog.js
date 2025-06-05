import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true, unique: false },
    date: ({ type: Date, default: Date.now }),
    content: { type: Array, required: true, unique: false },
    preview: { type: String, required: true, unique: false },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);