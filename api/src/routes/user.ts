import express from "express";
import userController from "../controllers/user.js";
const userRoute = express();
userRoute.use("/", userController);
export default userRoute;