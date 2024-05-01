import express from 'express';
import { login, createUsers, getMe, updateUser } from '../controllers/user.controllers.js';
import mustAdmin from '../utils/mustAdmin.js';
import { verifyToken } from '../utils/jwt.js'

const router = express.Router();

router.post('/login', login);
router.get('/me', verifyToken, getMe);
router.post('/create', verifyToken, mustAdmin, createUsers);
router.put('/update/:userId', verifyToken, mustAdmin, updateUser);

export default router;