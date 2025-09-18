import express from "express";
import { test } from "../controllers/user.controller.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.get("/test", test);
router.post("/create", async (req, res) => {
  const userInformation = req.body;

  const hashedPassword = await bcrypt.hash(req.body.password, 7);
  await User.create({
    displayName: req.body.displayName,
    userName: req.body.userName,
    email: req.body.email,
    hashedPassword: hashedPassword,
  });

  res.json("user created");
});

router.patch("/update", async (req, res) => {
  const updatedUser = await User.updateOne({userName:"Test"},req.body);

  res.json(updatedUser);
});

export default router;
