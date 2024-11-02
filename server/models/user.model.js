import mongoose from 'mongoose';

const userSchema = Schema(
    {
        firstName: String,
        lastName: String,
        username: {
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