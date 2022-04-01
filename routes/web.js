import express from "express";
import Usercontroller from "../controllers/Usercontroller.js";
let router = express.Router();

router.get("/", Usercontroller.home);
router.get("/register", Usercontroller.register);
router.post("/register", Usercontroller.createuserdoc);
router.get("/login", Usercontroller.login);
router.post("/login", Usercontroller.verifylogin);
export default router;
