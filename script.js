const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//Show loading
 function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
 }

 //Hide Laoding
 function complete() {
    if(!loader.hidden){
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
 }

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
    //Check the quote length
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }


    quoteText.textContent = quote.text;
} 

// Get Quotes from API
async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
       const response = await fetch(apiUrl);
       apiQuotes = await response.json();
       newQuote();
       //stop loader
       complete();
    } catch (error) {
        getQuotes();
    }
    
//Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

}
// on load
getQuotes();