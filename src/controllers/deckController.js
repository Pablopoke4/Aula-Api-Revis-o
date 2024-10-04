const express = require('express');
const DeckService = require('../services/deckService');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/register', authenticateToken, async(req, res) =>{
    try{
        const { attack, defense, cost, deckname } = req.body;
        const Deck = DeckService.createDeck({ attack, defense, cost, deckname });
        res.json(Deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

router.get('/decks', async(req, res) =>{
    try{
        const decks = await DeckService.getDecks();
        res.json(decks);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = router;