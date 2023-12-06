// Getting page elements

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show loader
function showLoading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loader
function hideLoading() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// New Quote function
function newQuote() {
    showLoading();
    const length = apiQuotes.length;
    const quote = apiQuotes[Math.floor(Math.random() * length)];

    // Check if author is unknown
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // Check Quote length
    if (quote.text.length > 50) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
    hideLoading();
}

// Get quotes from an API
async function getQuotes() {
    showLoading();
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log(error);
    }
    hideLoading();
}

// Tweet Quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - by ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}

// Event Listeners

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// Onload run function

getQuotes();
