const express = require('express');
const quotesRouter = express.Router();

const { quotes } = require('./data');
const { getRandomElement, getIndexById, updateElement } = require('./utils');

// Get a certain requested author or all quotes
quotesRouter.get('/', (req, res, next) => {
    const person = req.query.person;
    if (person) {
        const personQuotes = quotes.filter(quote => quote.person === person);
        res.send({ quotes: personQuotes })
    } else {
        res.send({ quotes });
    }
})

// Get a random quote
quotesRouter.get('/random', (req, res, next) => {
    const quote = getRandomElement(quotes);
    if (quote) {
        res.send({ quote });
    } else {
        res.status(404).send();
    }
})

// Create a quote
quotesRouter.post('/', (req, res, next) => {
    const quote = req.query.quote;
    const person = req.query.person;
    if (quote && person) {
        const newQuote = { id: quotes.length + 1, quote, person }; // Assign a unique ID
        quotes.push(newQuote)
        res.send({ quote: newQuote })
    } else {
        res.status(400).send();
    }
})

// Update a quote
quotesRouter.put('/:id', (req, res, next) => {
    const quoteIndex = getIndexById(req.params.id, quotes);
    if (quoteIndex !== -1) {
        const updatedQuote = updateElement(req.params.id, req.query, quotes);
        res.send({ quote: updatedQuote })
    } else {
        res.status(404).send();
    }
})

quotesRouter.delete('/:id', (req, res, next) => {
    const quoteIndex = getIndexById(req.params.id, quotes);
    if (quoteIndex !== -1) {
        quotes.splice(quoteIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
})

module.exports = quotesRouter;