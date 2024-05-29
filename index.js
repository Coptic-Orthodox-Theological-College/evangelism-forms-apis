import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/index.routes.js';
import { createAdminUser } from './utils/scripts.js';
import { checkAndCreateActivities, checkAndCreateFormTemplates } from './scripts/index.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log(`MongoDB connected successfully on ${process.env.MONGODB_URI}`);
    createAdminUser();
  })
  .catch((err) => console.log(err));

// checkAndCreateActivities()
// checkAndCreateFormTemplates()

// Routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});