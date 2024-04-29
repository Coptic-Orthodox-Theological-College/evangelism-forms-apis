import express from 'express';
import mustAdmin from '../utils/mustAdmin.js';
import { verifyToken } from '../utils/jwt.js'
import { getChurch, createChurch } from '../controllers/church.controllers.js';

const router = express.Router();

router.get('/me', verifyToken, getChurch);
router.post('/add', verifyToken, createChurch);

export default router;