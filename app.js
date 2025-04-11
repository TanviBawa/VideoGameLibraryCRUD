import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Routes for CRUD operations
import createRoute from './routes/createGame.js';
import readRoute from './routes/readGame.js';
import updateRoute from './routes/updateGame.js';
import deleteRoute from './routes/deleteGame.js';

dotenv.config();
const app = express();
app.use(express.json());

// Root route to display welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Video Game Library API!');
});

// Routes for CRUD operations on games
app.use('/api/games', createRoute);
app.use('/api/games', readRoute);
app.use('/api/games', updateRoute);
app.use('/api/games', deleteRoute);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
