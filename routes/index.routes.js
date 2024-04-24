import express from 'express';
import userRoutes from './user.routes.js';
import activityRouter from './activity.routes.js';
import formTemplateRouter from './formTemplate.routes.js';

const router = express.Router();


router.use('/users', userRoutes);
router.use('/activities', activityRouter);
router.use('/form-templates', formTemplateRouter);

export default router;