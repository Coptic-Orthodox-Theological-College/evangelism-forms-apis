import express from 'express';
import { login, createUsers } from '../controllers/user.controllers.js';
import mustAdmin from '../utils/mustAdmin.js';
import { verifyToken } from '../utils/jwt.js'

const router = express.Router();

router.post('/login', login);
router.get('/me', verifyToken, (req, res) => {
  res.json(req.user);
});
router.post('/create', verifyToken, mustAdmin, createUsers);

export default router;