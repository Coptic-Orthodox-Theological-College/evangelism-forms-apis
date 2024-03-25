import express from 'express';
import { login, createUser } from '../controllers/user.controllers.js';
import mustAdmin from '../utils/mustAdmin.js';
import { verifyToken } from '../utils/jwt.js'

const router = express.Router();

router.post('/login', login);
router.get('/me', verifyToken, (req, res) => {
  res.json(req.user);
});
router.post('/create', verifyToken, mustAdmin, createUser);

export default router;