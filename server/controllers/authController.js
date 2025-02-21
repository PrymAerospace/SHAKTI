// controllers/authController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';

// Secret key for JWT, should be kept secure
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Handle User Login
export const loginUser = async (req, res) => {
  const { username, password, orgCode } = req.body;

  try {
    // Find user by username and orgCode
    const user = await User.findOne({ username, orgCode });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Generate JWT Token (expires in 7 days)
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
