const loadQuotes = () => {

    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuotes(data))

}
// loadQuotes()
const displayQuotes = quote => {
    const quotesId = document.getElementById('quotes')
    quotesId.innerText = quote.quote
}


