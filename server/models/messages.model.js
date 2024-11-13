import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
    {
        group:[
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        messages:[
            {
                text: String,
                from: {
                    type : Schema.Types.ObjectId,
                    ref: "User",
                    required: true
                },
                dateTime: {
                    type : Date,
                    required : true
                }
            },
        ],
    }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;