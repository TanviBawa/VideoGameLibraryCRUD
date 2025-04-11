import express from 'express';
import Game from '../models/game.js';

const router = express.Router();

router.put('/:id', async (req, res) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGame) return res.status(404).json({ message: 'Game not found' });
    res.json(updatedGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
