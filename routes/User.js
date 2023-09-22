import { Router } from "express";
import {
  userSignupController,
  userSigninController,
} from "../controllers/User.js";

const router = Router();

router.post("/signup", userSignupController);

router.post("/signin", userSigninController);

export default router;
