//Define global variables

var wins = 0;
var losses = 0;
var currentValue = 0;
var goalValue = 0;
var blue = 0;
var red = 0;
var yellow = 0;
var green = 0;


//Have comp randomly generate goal-value

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


goalValue = random(19,120);

console.log(goalValue);



//Display goal-value in proper spot

goalValueText = $("#goal-value")

goalValueText.text(goalValue);



//Display current-value in proper spot

var currentValueText = $("#current-value")

currentValueText.text(currentValue);



//Display current win and loss total

var winsText = $("#wins")

winsText.text(wins);

var lossesText = $("#losses")

lossesText.text(losses);



//Have comp randomly generate points for each crystal button and attach to each respective button

function assignPoints() {

blue = random(1,12);
green = random(1,12);
red = random(1,12);
yellow = random(1,12);

$("#blue-btn").data("value", blue);

$("#green-btn").data("value", green);

$("#yellow-btn").data("value", yellow);

$("#red-btn").data("value", red);

console.log(blue,green,red,yellow);

}



//Call the function 

assignPoints();



//When crystal button is pressed (onclick event), add respective points to current-value

$(document).ready(function(){

$(".btn").on("click", function(){

currentValue += $(this).data("value");

currentValueText.text(currentValue);



//Define reset function

function reset () {
    currentValue = 0;
    currentValueText.text(currentValue);
    goalValue = random(19,120);
    goalValueText.text(goalValue);
    assignPoints();
 
}



//If current value > goal-value, increase losses by one and reset game

if (currentValue > goalValue) {
    losses+=1;
    lossesText.text(losses);
    alert("YOU LOSE!");
    reset();



//If current value === goal-value, increase wins by one and reset game

 } else if (currentValue === goalValue) {
     wins+=1;
     winsText.text(wins);
     alert("YOU WIN!");
     reset();
 }

});

});










