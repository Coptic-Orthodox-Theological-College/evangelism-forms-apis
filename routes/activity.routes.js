import { createActivity, getActivities } from "../controllers/activity.controllers.js";
import express from "express";

const activityRouter = express.Router();

activityRouter.post("/create", createActivity);
activityRouter.get("/list", getActivities);

export default activityRouter;
