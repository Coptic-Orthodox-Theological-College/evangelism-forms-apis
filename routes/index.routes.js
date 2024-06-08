import express from 'express';
import userRoutes from './user.routes.js';
import activityRouter from './activity.routes.js';
import formTemplateRouter from './formTemplate.routes.js';
import churchRouter from './church.routes.js';
import formSubmissionRouter from './formSubmission.routes.js';
import statisticsRouter from './statistics.routes.js';

const router = express.Router();


router.use('/users', userRoutes);
router.use('/churches', churchRouter);
router.use('/activities', activityRouter);
router.use('/form-templates', formTemplateRouter);
router.use('/form-submissions', formSubmissionRouter);
router.use('/statistics', statisticsRouter);

export default router;