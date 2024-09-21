const { v4: UUIDV4 } = require('uuid')
const CardRepository = require('../repositories/cardRepositorer');
const containsSpecialCharacters = require('../utils/validation')

class CardService{
    async getCards(){
        return CardRepository.findAll();
    }

    async createCard(Card){
       if(Card.attack < 0 || Card.attack > 500){
            throw new Error ('Attack must be between 0 and 500');
       }
        
       if(Card.defense < 0 || Card.defense > 500){
        throw new Error ('Defense must be between 0 and 500');
       }

       if(Card.cost < 1 || Card.cost > 5){
        throw new Error ('Cost must be between 1 and 5');
        }

        if(Card.Cardname < 4) {
            throw new Error ('the Nameof the card must be contain at least 4 letters');
        }

   
        Card.id = UUIDV4();
       return CardRepository.createCard(Card);
    }
}

module.exports = new CardService();