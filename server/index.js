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
app.use(Express.static("/server"));

dotenv.config();

app.get("/", (req, res) => {
  //   res.send("home page");
  app.use(Express.static(path.resolve(`${process.cwd()}/build`)));
  res.sendFile(path.resolve(`${process.cwd()}/build/index.html`));
});

app.use("/contact", contactRoutes);
app.use("/contactOwn", contactOwnRoutes);
app.use("/projectlink", projectLinkRoutes);

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
