import express from "express";
import { verifyToken } from "../utils/jwt.js";
import { createSubmission, getOneSubmission,deleteSubmission } from "../controllers/formSubmission.controllers.js"

const formSubmissionRouter = express.Router();

formSubmissionRouter.post("/submit/:formTemplateId", verifyToken, createSubmission);
formSubmissionRouter.get("/one/:submissionId", verifyToken, getOneSubmission);
formSubmissionRouter.delete("/delete/:submissionId", verifyToken, deleteSubmission);


export default formSubmissionRouter;