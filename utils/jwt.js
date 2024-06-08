import jwt from 'jsonwebtoken';

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1w' });
};

export const verifyToken = (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) return res.status(401).json({ message: 'Access denied' });

  try {
    const token = bearerToken.split(' ')[1];
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // // check expiration
    // if (Date.now() >= verified.exp * 1000) {
    //   return res.status(401).json({ message: 'Token expired' });
    // }

    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
}