import express from "express";
import * as authController from '../controllers/auth.controller'

const router = express.Router();

router.route("/signup").post(authController.);
router.route("/login").post();
router.route("/forgot-password").post();
router.route("/reset-password").post();
router.route("/logout").post();

export default router;
