import express from 'express';
import Game from '../models/game.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, genre, platform, release_year, developer } = req.body;
    if (!title || !genre || !platform || !release_year || !developer) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const newGame = new Game({ title, genre, platform, release_year, developer });
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
