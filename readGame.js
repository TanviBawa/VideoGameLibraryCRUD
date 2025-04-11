import express from 'express';
import Game from '../models/game.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
