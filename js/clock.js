const clock = document.querySelector("h2#clock");
const hello = document.querySelector("#hello");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerHTML = (`${hours}:${minutes}:${seconds}`)
}

getClock();
setInterval(getClock,1000)

function long_msg(){
    const name = "Lee".padEnd(10,"00");
    const job = "student".padEnd(10,"00");
    const height = "172".padEnd(10,"00");

    hello.innerHTML =`Hi my name is ${name} and I'm ${job} also I'm ${height}cm tall`
}

long_msg();
