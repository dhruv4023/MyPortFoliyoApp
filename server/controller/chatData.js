import jwt from 'jsonwebtoken'
import details from '../models/chatData.js'
import mongoose from 'mongoose';
export const chatData = async (req, res) => {
    const { name, email, side } = req.body;
    // console.log(req.body)
    try {
        const existingUser = await details.findOne({ email });
        if (!existingUser) {
            // console.log("login")
            try {
                const newUser = await details.create({ name, email, side })
                const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
                res.status(200).json({ result: newUser, token })
                // console.log("login1")
            } catch (error) {
                res.status(500).json("something wents wrong . . .")
            }
        } else {
            // console.log("sign")
            // const hashPassword = await bcrypt.hash(password, 12)
            // const newUser = await users.create({ name, email, password })
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET);
            // console.log("login12")
            res.status(200).json({ result: existingUser, token })
        }
    } catch (err) {
        res.status(500).json("something wents wrong . . .")
    }
}

// { name: 'abc', email: 'xyz@mail.com', side: 'visitor', messages: [] }


export const chatMess = async (req, res) => {
    const { id: _id } = req.params;
    // console.log(req.params)
    const { message, side } = req.body;
    // console.log(message, side)

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Question unavailable...')
    }
    try {
        const addMessages = await details.findByIdAndUpdate(_id, { $addToSet: { 'messages': [{ message, side }] } })
        // console.log("hello")
        res.status(200).json(addMessages)
        // console.log("hello")
    } catch (error) {
        console.log("/controller/ChatMess Error")
        // res.status(400).json("error")
        res.status(400).json(error)
    }
}


export const getAllMessages = async (req, res) => {
    try {
        const messageList = await details.find();
        // console.log(messageList)
        res.status(200).json(messageList);
    } catch (error) {
        // console.log("messageList")
        res.status(404).json({ message: error.message });
    }
} 