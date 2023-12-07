// // Getting page elements

// const quoteContainer = document.getElementById("quote-container");
// const quoteText = document.getElementById("quote");
// const authorText = document.getElementById("author");
// const twitterBtn = document.getElementById("twitter");
// const newQuoteBtn = document.getElementById("new-quote");
// const loader = document.getElementById("loader");

// // Show loader

// function showLoader() {
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }

// // Hide loader
// function hideLoader() {
//     loader.hidden = true;
//     quoteContainer.hidden = false;
// }

// // Get quote from API
// async function getQuote() {
//     showLoader();
//     const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//     const apiUrl =
//         "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
//     try {
//         const response = await fetch(proxyUrl + apiUrl);
//         const data = await response.json();
//         // If quote author is unknown
//         if (data.authorText == "") {
//             authorText.innerText = "Unknown";
//         } else {
//             authorText.innerText = data.quoteAuthor;
//         }
//         // If quote length is too long
//         if (data.quoteText.length > 120) {
//             quoteText.classList.add("long-quote");
//         } else {
//             quoteText.classList.remove("long-quote");
//         }
//         quoteText.innerText = data.quoteText;
//     } catch (error) {
//         console.log(error);
//     }
//     hideLoader();
// }

// function tweetQuote() {
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - by ${authorText.textContent}`;
//     window.open(twitterUrl, "_blank");
// }

// // Event Listeners
// newQuoteBtn.addEventListener("click", getQuote);
// twitterBtn.addEventListener("click", tweetQuote);

// // Onload

// getQuote();

// Getting Page elements
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Show Loader
function showLoader() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loader
function hideLoader() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

async function getQuote() {
    showLoader();
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl =
        "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();

        if (data.authorText == "") {
            authorText.innerText = "Unknown";
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        if (data.quoteText > 50) {
            quoteText.classList.add("long-quote");
        } else {
            quoteText.classList.remove("long-quote");
        }
        quoteText.innerText = data.quoteText;
    } catch (error) {
        console.log(error);
    }
    hideLoader();
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - by ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// Onload

getQuote();
