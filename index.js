
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randDICE1 = "images/dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randDICE1)


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randDICE2 = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randDICE2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Yayy! Player 1 Winns!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Wohoo! Player 2 Winns!!"
}
else{
    document.querySelector("h1").innerHTML = "oops! Its a DRAW"
}