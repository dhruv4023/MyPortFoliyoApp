import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import contactRoutes from "./routes/contact.js";
import contactOwnRoutes from "./routes/contactOwn.js";
import projectLinkRoutes from "./routes/project.js";

const app = Express();
app.use(Express.json({ limit: "30mb", extended: true }));
app.use(Express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use(Express.static("./public"));

dotenv.config();

app.get("/", (req, res) => {
  // let x = process.cwd();
  res.send("home page  ");
  // app.use(Express.static(path.join(`${process.cwd()}/public/build`)));
  // res.sendFile(path.resolve(`${process.cwd()}/public/build/index.html`));
  // app.use(Express.static(path.resolve(`/build`)));
  // res.sendFile(path.resolve("./public/x.html"));
});
// console.log(process.cwd());

app.use("/_contact", contactRoutes);
app.use("/_contactOwn", contactOwnRoutes);
app.use("/_projectlink", projectLinkRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running on the http://localhost:${PORT}`);
});

const DB_URL = process.env.CONNECTION_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connected");
  })
  .catch((error) => {
    console.log(error);
    console.log("db not connected");
  });
/*
git add .
git commit -am "vercel"
git push origin main

*/