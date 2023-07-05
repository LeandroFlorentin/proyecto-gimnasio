import express from "express";
import jwtClass from "../class/class-user";
const userController = express();
const {loginUser} = new jwtClass()
userController.post("/Login",(req,res)=>{
  loginUser(req,res)
})
export default userController;