import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'This Email already exist!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [
            /^(?=.{5,25}$)(?![_.])(?!.*[_.]{2})(?<![_.])(?!.*(?:russia|росія|россия))[^\p{IsHan}\p{IsIndian}_.]+(?<![_.])$/,
            'Username invalid, it should contain 5-20 alphanumeric letters and be unique!',
        ],
    },
    image: {
        type: String,
    },
});

const User = models.User || model("User", UserSchema);
export default User