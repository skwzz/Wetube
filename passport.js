import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import {
  githubLoginCallback,
  facebookLoginCallback
} from "./controllers/userController";
import routes from "./routes";
import dotenv from "dotenv";
dotenv.config();
passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}${
        routes.githubCallback
      }`
    },
    githubLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//passport.serializeUser((user, done) => done(null, user));
//passport.deserializeUser((user, done) => done(null, user));
