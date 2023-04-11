import Project from "../models/Project.js";
import mongoose from "mongoose";
export const postProjectLink = async (req, res) => {
  const postProjectData = req.body;
  // console.log(postProjectData)
  const postProject = new Project(postProjectData);
  // console.log(postProject)
  try {
    await postProject.save();
    res.status(200).json("Posted a Link successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json("could't post a Comment");
  }
};
export const getProjectLink = async (req, res) => {
  try {
    const projectLinkList = await Project.find();
    res.status(200).json(projectLinkList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteLink = async (req, res) => {
  const { id: _id } = req.params;
  // console.log(_id)
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Project unavailable...");
  }
  try {
    await Project.findByIdAndRemove(_id);
    // console.log("hello")
    res.status(200).json({ message: "Project Successfully deleted ..." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const editLink = async (req, res) => {
  const { id: _id } = req.params;
  const { Title, Link, Description } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("LinkProject unavailable...");
  }
  try {
    const updatedProject = await Project.findByIdAndUpdate(_id, {
      $set: { Title: Title, Link: Link, Description: Description },
    });
    // console.log("hm")
    res.status(200).json(updatedProject);
  } catch (error) {
    // console.log("edi cmt")
    res.status(400).json("error");
  }
};
