var randomNumber1 = Math.floor(Math.random() * 6)  + 1; // creating this function to get random from 1 to 6  

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
// this will bring the path where dice is saved

var image1 = document.querySelectorAll("img")[0]; // this will change the first dice image
// above we have querySeclectorAll because there are more then one img tag
image1.setAttribute("src", randomDiceImage1); // this will generate random dice images this setAttribute() will change the attribute here "src" and using the randomDiceImage

// Now repeating the same process but this time for second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"
var image2 = document.querySelectorAll("img")[1];// here we are using "[1]" here which defines that we are using second img. Basically we are using second img element 
// above we have querySeclectorAll because there are more then one img tag
image2.setAttribute("src", randomDiceImage2);

if (randomDiceImage1 > randomDiceImage2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 is a winner!"
    // You can also use it to set or change elements' innerHTML content.
}else if(randomDiceImage1 < randomDiceImage2) {
    document.querySelector("h1").innerHTML = "🏆 Player 2 is a winner!"
}else {
    document.querySelector("h1").innerHTML = "😔 It's a Draw."
};