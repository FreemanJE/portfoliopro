import express from 'express';
import dotenv from "dotenv"
import cors from "cors"
import path from "path";
import contactRoute from './route/contactRoute.js'

dotenv.config()
const app = express();
const __dirname = path.resolve();
app.use(cors());

app.use(express.json());

app.use("/", contactRoute);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); //express.static created in the client folder as build  delivers static files like html,css
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server listing to port 5000 only`)
});