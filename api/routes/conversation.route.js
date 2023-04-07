import express from "express";
import {
  createConversations,
  getConversations,
  getSingleConversations,
  updateConversations,
} from "../controllers/conversation.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConversations);
router.get("/single/:id", verifyToken, getSingleConversations);
router.put("/:id", verifyToken, updateConversations);

export default router;
