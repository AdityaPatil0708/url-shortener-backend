import { authenticate } from "../middlewares/authMiddleware.js";
import { url, shorturl } from "../controllers/urlController.js";
import express from "express";

const router = express.Router();

//insert url and shorten it
router.post("/url",authenticate,url);
router.post("/shortenurl",authenticate,shorturl);

export default router;