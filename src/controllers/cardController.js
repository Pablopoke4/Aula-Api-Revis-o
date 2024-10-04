const express = require('express');
const CardService = require('../services/cardService');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/register', authenticateToken, async(req, res) =>{
    try{
        const { attack, defense, cost, cardname } = req.body;
        const Card = CardService.createCard({ attack, defense, cost, cardname });
        res.json(Card);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

router.get('/cards', authenticateToken, async(req, res) =>{
    try{
        const cards = await CardService.getCards();
        res.json(cards);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = router;