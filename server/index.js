import express from "express";
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comment.route.js";
import pinRouter from "./routes/pin.route.js";
import boardRouter from "./routes/board.route.js";
import connectDb from "./utils/connectDB.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/pin", pinRouter);
app.use("/board", boardRouter);
app.use("/comment", commentRouter);

app.listen(3000, () => {
  connectDb();
  console.log("server is running !");
});
