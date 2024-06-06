const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// Get all quotes
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

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});