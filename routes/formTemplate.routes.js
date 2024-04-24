import {
  createFormTemplate,
  createSubmission,
  listAllFields,
  getFormTemplate,
} from "../controllers/formTemplate.controllers.js";

import express from "express";

const formTemplateRouter = express.Router();

formTemplateRouter.post("/create", createFormTemplate);
formTemplateRouter.post("/submit", createSubmission);
formTemplateRouter.get("/list", listAllFields);
formTemplateRouter.get("/:formTemplateId", getFormTemplate);

export default formTemplateRouter;
