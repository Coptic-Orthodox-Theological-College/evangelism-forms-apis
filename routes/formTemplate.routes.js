import {
  createFormTemplate,
  listAllFields,
  getFormTemplate,
  updateFormTemplate,
  listAllFormTemplatesByActivityId,
} from "../controllers/formTemplate.controllers.js";

import express from "express";
import { verifyToken } from "../utils/jwt.js";

const formTemplateRouter = express.Router();

formTemplateRouter.post("/create", createFormTemplate);
formTemplateRouter.get("/:formTemplateId", getFormTemplate);
formTemplateRouter.put("/update/:formTemplateId", updateFormTemplate);
formTemplateRouter.get("/list/:activityId", listAllFormTemplatesByActivityId);
formTemplateRouter.get("/list", listAllFields);

export default formTemplateRouter;
