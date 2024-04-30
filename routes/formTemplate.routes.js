import {
  createFormTemplate,
  createSubmission,
  listAllFields,
  getFormTemplate,
  updateFormTemplate,
} from "../controllers/formTemplate.controllers.js";

import express from "express";

const formTemplateRouter = express.Router();

formTemplateRouter.post("/create", createFormTemplate);
formTemplateRouter.put("/update/:formTemplateId", updateFormTemplate);
formTemplateRouter.post("/submit", createSubmission);
formTemplateRouter.get("/list", listAllFields);
formTemplateRouter.get("/:formTemplateId", getFormTemplate);

export default formTemplateRouter;
