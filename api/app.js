import express from "express";
import postRoute from "./routes/post.route.js";

// Use PORT provided in environment or default to 3000
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/post", postRoute);

app.listen(port,"0.0.0.0", () => {
    console.log("Backend server is running!");
})