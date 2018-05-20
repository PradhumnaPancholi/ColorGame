var colors = generateRandoomColors(6);
//selecting square div(s)
var square = document.querySelectorAll(".square");
//variable for selected color
var pickedColor =  pickColor();
//var to change picked color(question) in header
var colorDisplay = document.getElementById("colorDisplay");
//for maniupilation of display board//
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");


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
            h1.style.backgroundColor = clickedColor;
        }else{
            //behavious for wrong answer//
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });
}

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

//function to generate random colors//
function generateRandoomColors(num){
    //make an array//
    var arr = []
    //add num of random colors to array arr//
    for(var i =0; i < num; i++){
        randomColor();
        //get random num and push into array//
        arr.push(randomColor());
    }
    //return that array//
    return arr;
}

function randomColor(){
    //pick "red" from 0-255//
    var r = Math.floor(Math.random() * 256);
    //pick "green" from 0-255//
    var g = Math.floor(Math.random() * 256);
    //pick "blue" from 0-255//
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}


   
