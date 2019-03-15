import express from "express";
import routes from "../routes";
import {
  changePassword,
  editProfile,
  userDetail,
  users
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.user_detail, userDetail);
userRouter.get(routes.edit_profile, editProfile);
userRouter.get(routes.change_password, changePassword);

export default userRouter;
