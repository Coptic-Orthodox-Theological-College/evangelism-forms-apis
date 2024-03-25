const mustAdmin = (req, res, next) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ message: 'Unauthorized' });
  next();
}

export default mustAdmin;