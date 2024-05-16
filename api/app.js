import express from "express";
import postRoute from "./routes/post.route.js";

const app = express();

app.use(express.json());

app.use("/api/post", postRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
})