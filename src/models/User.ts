import mongoose, { Document, Schema } from "mongoose";
import { Message, MessageSchema } from "./Message";

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[];
}

export const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Username is required!"],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/.+\@.+\..+/, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verify code is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify code expiry is required"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema],
});

const UserModel =
    (mongoose.models.User as mongoose.Model<User>) || mongoose.model("User", UserSchema);

export default UserModel;
