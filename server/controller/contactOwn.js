import details from '../models/contact.js'

export const allContactData = async (req, res) => {
    try {
        const messageList = await details.find();
        res.status(200).json(messageList);
    } catch (error) {
        
        res.status(404).json({ message: error.message });
    }
} 