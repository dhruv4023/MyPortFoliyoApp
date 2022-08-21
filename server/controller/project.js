import Project from "../models/Project.js"

export const postProjectLink = async (req, res) => {
    const postProjectData = req.body;
    // console.log(postProjectData)
    const postProject = new Project(postProjectData);
    try {
        await postProject.save();
        res.status(200).json("Posted a Link successfully")
    } catch (error) {
        console.log(error);
        res.status(400).json("could't post a Comment")
    }
}
export const getProjectLink = async (req, res) => {
    try {
        const projectLinkList = await Project.find();
        res.status(200).json(projectLinkList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}