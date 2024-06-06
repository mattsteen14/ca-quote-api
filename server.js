const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, getIndexById, updateElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// Get a certain requested author or all quotes
app.get('/api/quotes', (req, res, next) => {
    const person = req.query.person;
    if (person) {
        const personQuotes = quotes.filter(quote => quote.person === person);
        res.send({ quotes: personQuotes })
    } else {
        res.send({ quotes });
    }
})

// Get a random quote
app.get('/api/quotes/random', (req, res, next) => {
    const quote = getRandomElement(quotes);
    if (quote) {
        res.send({ quote });
    } else {
        res.status(404).send();
    }
})

// Create a quote
app.post('/api/quotes', (req, res, next) => {
    const quote = req.query.quote;
    const person = req.query.person;
    if (quote && person) {
        const newQuote = { quote, person };
        quotes.push(newQuote)
        res.send({ quote: newQuote })
    } else {
        res.status(400).send();
    }
})

// Update a quote
app.put('/api/quotes/:id', (req, res, next) => {
    const quoteIndex = getIndexById(req.params.id, quotes);
    if (quoteIndex !== -1) {
        const updatedQuote = updateElement(req.params.id, req.query, quotes);
        res.send({ quote: updatedQuote })
    } else {
        res.status(404).send();
    }
})

app.delete('/api/quotes/:id', (req, res, next) => {
    const quoteIndex = getIndexById(req.params.id, quotes);
    if (quoteIndex !== -1) {
        quotes.splice(quoteIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});