const express = require('express');
const userController = require('./controllers/userController')
const contentController = require('./controllers/contentController')
const cardController = require('./controllers/cardController')

const app = express();
app.use(express.json());
app.use('/api/users', userController);
app.use('/api/content', contentController);
app.use('/api/card', cardController);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})