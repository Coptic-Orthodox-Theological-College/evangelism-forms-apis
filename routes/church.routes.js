import express from 'express';
import mustAdmin from '../utils/mustAdmin.js';
import { verifyToken } from '../utils/jwt.js'
import { getChurch, createChurch, getChurchs, updateChurch, getAllChurchSubbmissions } from '../controllers/church.controllers.js';

const router = express.Router();

router.get('/', verifyToken, mustAdmin, getChurchs);
router.get('/me', verifyToken, getChurch);
router.post('/add', verifyToken, createChurch);
router.put('/update', verifyToken, updateChurch);
router.get('/get-all-submissions', verifyToken, getAllChurchSubbmissions);

export default router;