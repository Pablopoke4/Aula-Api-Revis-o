const Card = require('../models/cards')

class CardRepository{
    async createCard(card){
        return await Card.create(card);
    }

    async findAll(){
        return await Card.findAll({
            where: {
                deleted: false
            }
        });
    }
}

module.exports = new CardRepository();