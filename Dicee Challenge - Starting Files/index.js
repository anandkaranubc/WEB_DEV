var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", 
"images/dice4.png", "images/dice5.png", "images/dice6.png"];

var first = images[randomNumber1];
var second = images[randomNumber2];



document.getElementsByClassName("img1")[0].setAttribute("src", first);

document.getElementsByClassName("img2")[0].setAttribute("src", second);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Tie Breaker!";
}

