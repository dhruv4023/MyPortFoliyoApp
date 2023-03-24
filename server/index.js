import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import contactRoutes from "./routes/contact.js";
import contactOwnRoutes from "./routes/contactOwn.js";
import projectLinkRoutes from "./routes/project.js";
import fs from "fs";
const app = Express();
app.use(Express.json({ limit: "30mb", extended: true }));
app.use(Express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(Express.static("./views/build"));

dotenv.config();

app.get("/", function (req, res) {
  res.sendFile("./index.html");
  // fs.readFile("index.html", function (err, data) {
  //   if (err) {
  //     // Handle errors, such as if the file does not exist
  //     res.writeHead(404);
  //     res.write("File not found");
  //     res.end();
  //   } else {
  //     // Send the contents of the file as a response
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write(data);
  //     res.end();
  //   }
  // });
});
// app.get("/", (req, res) => {
//   res.send("home page  ");
// });
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
