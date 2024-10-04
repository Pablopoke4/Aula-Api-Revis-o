const DeckRepository = require('../repositories/deckRepository');
const containsSpecialCharacters = require('../utils/validation')

class DeckService{
    async getDecks(){
        return DeckRepository.findAll();
    }

    async createDeck(text){
        if(!text){
            throw new Error('Texto em branco')
        }

        if(Deck.deckname.lenght > 60){
            throw new Error('Nome do deck é maior que o permitido')
        }

        if(Deck.description < 30 || Deck.description > 300){
            throw new Error('A descrição do deck é deve ter entre 30 á 300 letras');
        }

        return DeckRepository.createDeck({text});
    }
}

module.exports = new DeckService();