import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    confirmed: { type: Boolean, default: false}
});

export default mongoose.models.User || mongoose.model("User", UserSchema);