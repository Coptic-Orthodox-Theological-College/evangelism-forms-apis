import express from 'express';
import { getGeneralNumbers, getGeneralNumbersCSV } from '../controllers/statistics.controllers.js';

const statisticsRouter = express.Router();

statisticsRouter.get("/general-numbers", getGeneralNumbersCSV);

export default statisticsRouter;