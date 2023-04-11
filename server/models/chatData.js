
import mongoose from "mongoose";

const contactDetailsSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    chatMessOn: {type: Date, default: Date.now },
    messagesList:[{
        side: String,
        message: String,
        messagedOn: { type: Date, default: Date.now }
    }]    
})

export default mongoose.model("chatData", contactDetailsSchema)