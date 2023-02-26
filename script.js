const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new Quote
function newQuote() {
    // Pick a random qoute
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if author populated
    if (!quote.author) {
        quote.author = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // font size on longer qoutes
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
}

//Event Listener
newQuoteBtn.addEventListener('click', newQuote);

// Get Qoutes from API
// Asyncronous fetch request within a try catch
async function getQoutes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (err) {
        // Catch Error here
        alert(err);
    }
}

// OnLoad
getQoutes();