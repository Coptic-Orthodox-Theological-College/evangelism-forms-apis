import {
  createFormTemplate,
  createSubmission,
  listAllFields,
  getFormTemplate,
  updateFormTemplate,
  listAllFormTemplatesByActivityId,
} from "../controllers/formTemplate.controllers.js";

import express from "express";

const formTemplateRouter = express.Router();

formTemplateRouter.post("/create", createFormTemplate);
formTemplateRouter.put("/update/:formTemplateId", updateFormTemplate);
formTemplateRouter.get("/list/:activityId", listAllFormTemplatesByActivityId);
formTemplateRouter.post("/submit", createSubmission);
formTemplateRouter.get("/list", listAllFields);
formTemplateRouter.get("/:formTemplateId", getFormTemplate);

export default formTemplateRouter;
