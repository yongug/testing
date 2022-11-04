const quotes = [
    {
        quote:"When you have faults, do not fear to abandon them.",
        author:"confucius"
    },
    {
        quote:"They must often change who would be constant in happiness or wisdom.",
        author:"confucius"
    },
    {
        quote:"Despite the forecast, live like it’s spring. ",
        author:"yongug"
    },
    {
        quote:"I 'm god",
        author:"messi"
    },
    {
        quote:"I use left and right foot both",
        author:"son"
    }
    
]

const rand_num = Math.floor(Math.random()*quotes.length);

const Today = quotes[rand_num];
const TodayQuote = document.querySelector("#quotes span:first-child");
const TodayAuthor = document.querySelector("#quotes span:last-child");

TodayQuote.innerHTML = Today.quote;
TodayAuthor.innerHTML = Today.author;