import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    Title: {type:String},
    Link: {type:String},
    Description: {type:String},
    postedOn: { type: Date, default: Date.now },
})

export default mongoose.model("Projects", projectSchema)