const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes =[];

//show New Quote
function newQuote() {
    // pick a random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if author is available
    if(!quote.author) {
        authorText.textContent = "Unknown";
    } else {
    authorText.textContent = quote.author;
    }
    quoteText.textContent = quote.text;
} 

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
       const response = await fetch(apiUrl);
       apiQuotes = await response.json();
       newQuote();
    } catch (error) {

    }
}
// on load
getQuotes();