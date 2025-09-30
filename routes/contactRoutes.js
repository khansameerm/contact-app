import express from "express";
import { createContact, deleteContact, getAllContacts , getContact, UpdateContact} from "../controllers/contactControllers.js";

const router = express.Router();

//contact apis
router.get("/", getAllContacts);
router.get("/:id", getContact);
router.post("/", createContact);
router.put("/:id", UpdateContact);
router.delete("/:id", deleteContact);

export default router;
