var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
//selecting square div(s)
var square = document.querySelectorAll(".square");
//variable for selected color
var pickedColor = pickColor();
//var to change picked color(question) in header
var colorDisplay = document.getElementById("colorDisplay");
//for maniupilation of display board//
var messageDisplay = document.getElementById("message");

//manuplating picked color in header
colorDisplay.textContent = pickedColor; 

//applying rgb pallets to the square
for (var i = 0;  i < square.length; i++){
    //add initial colors to square
    square[i].style.backgroundColor = colors[i]; 

    //add click listner to squares
    square[i].addEventListener('click', function(){
        //grab the color of clicked square
        var clickedColor = this.style.backgroundColor;
        //comparing picked color with clicked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColor(clickedColor);
        }else{
            //behavious for wrong answer//
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });

//function for the behaviour on correct answer//
function changeColor(color){
    //loop to affect all square according to correct answer//
    for (var i = 0; i < square.length; i++){
        //change each color to correct color//
        square[i].style.backgroundColor = color;
    }
}

//function to pick random color
function pickColor(){
    //generates a random number//
    var random = Math.floor(Math.random() * colors.length);
    //accessing the number from array//
    return colors[random];
}
   
}