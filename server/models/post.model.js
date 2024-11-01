import mongoose from 'mongoose';

const postSchema = new Schema(
    {
        from : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        img : {
            type: String
        },
        message : {
            type : String
        },
        numLikes : {
            type : Number,    
            default : 0
        },
        comments : [
            {
				text: {
					type: String,
					required: true,
				},
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "User",
					required: true,
				},
                numLikes : {
                    type : Number,
                    default : 0
                }
			},
        ],
    },
    {timestamp: true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;