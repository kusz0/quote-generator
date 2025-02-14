const quote = document.getElementById("quote");
const autohor = document.getElementById("author");
const newQuoteBtn = document.querySelector(".quote-box div button:nth-child(1)")
const twitterBtn = document.querySelector(".quote-box div button:nth-child(2)")

const apiUrl = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    quote.innerHTML = data.content;
}
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=Hello%20world", "Tweet Window", "width=600","height=300");
}
// getQuote(apiUrl);
newQuoteBtn.addEventListener("click", getQuote(apiUrl));
twitterBtn.addEventListener("click",tweet)

//   href="https://twitter.com/intent/tweet?text=Hello%20world">  
