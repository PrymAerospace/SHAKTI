// routes/authRoutes.js
import express from 'express';
// import { loginUser } from '../controllers/authController';
// import { authMiddleware } from '../middlewares/auth';
import { loginUser } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Login Route
router.post('/login', loginUser);

// Protected Route (example)
router.get('/dashboard', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Welcome to the dashboard!' });
});

export default router;
