import express from "express";
import userController from "../controllers/user";
const userRoute = express();
userRoute.use("/",userController);
export default userRoute;