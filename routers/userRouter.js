import express from "express";
import routes from "../routes";
import {
  getChangePassword,
  postChangePassword,
  getEditProfile,
  postEditProfile,
  userDetail,
  users
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middleware";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
