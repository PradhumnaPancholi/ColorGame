var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
//selescting square div(s)
var square = document.querySelectorAll(".square");
//variable for selected color
var pickedColor = colors[3];
//var to change picked color(question) in header
var colorDisplay = document.getElementById("colorDisplay");

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
            alert("Correct");
        }else{
            alert("Wrong, try again");
        }

    });
   
} 