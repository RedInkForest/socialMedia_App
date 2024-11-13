import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email : {
            type : String,
            required : true,
            unique : true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password : {
            type: String,
            required: true,
        },
        img: {
            type: String
        },
        aboutMe: String,
        follows: [
            {
                user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
					required: true,
				},
            }
        ],
        numFollowers : Number
    }
);

const User = mongoose.model('User', userSchema);

export default User;