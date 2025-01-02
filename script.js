const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading Spinner
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading Spinner
function complete() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Local Quotes
const localQuotes = [
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "We do not remember days, we remember moments.", author: "Cesare Pavese" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "It’s not the years in your life that count, it’s the life in your years.", author: "Abraham Lincoln" },
    { text: "You can't help everyone, but everyone can help someone.", author: "Ronald Reagan" },
    { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"}
];


// Show New Quote
function newQuote() {

    loading(); 
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    authorText.textContent = quote.author || "Unknown";
    quoteText.textContent = quote.text;

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    complete(); 
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);  
twitterBtn.addEventListener('click', tweetQuote);

// On Load
newQuote(); // Call newQuote directly on page load
