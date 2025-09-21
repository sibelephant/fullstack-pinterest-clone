import express from "express";
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comment.route.js";
import pinRouter from "./routes/pin.route.js";
import boardRouter from "./routes/board.route.js";
import connectDb from "./utils/connectDB.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use("/users", userRouter);
app.use("/pin", pinRouter);
app.use("/board", boardRouter);
app.use("/comment", commentRouter);

app.listen(3000, () => {
  connectDb();
  console.log("server is running !");
});
