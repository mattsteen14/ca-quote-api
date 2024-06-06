const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, getIndexById, updateElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const quotesRouter = require('./quotes');
app.use('/api/quotes', quotesRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});