import jwt from 'jsonwebtoken'
import details from '../models/contact.js'
export const contactData = async (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body)
    try {
        // const existingUser = await details.findOne({ email });
        // if (existingUser) {
        //     return res.status(200).json({ message: "contact Already Exist" });
        // }
        // console.log("1")
        const newData = await details.create({ name, email, message });
        // console.log("2")
        const token = jwt.sign({ name: newData.name, email: newData.email, message: newData.message },process.env.JWT_SECRET);
        // console.log("3")
        res.status(200).json({ result: newData, token })
    } catch (error) {
        res.status(500).json("something wents wrong . . .")
    }
}