//empty array to hold inputs
var array = [];

var count = array.length; //create a variable to hold the count, or total number of inputs made

//********************************************************************** SUBMIT FUNCTION*//
function submit() {
  event.preventDefault(); //stops default action from happening
    
  var x = Number(document.form1.num.value); //the number JS object is a wrapper object allowing your to work with numerical values. A number object is created using the Number() constructor. Using this we will be able to take the integer value vs the text value of each input. 

//If statement that checks whether the input is a number and pushes the value to the array
	if (isNaN(x)) { //If x is not a number, alert user "error".
    alert("Error.");
  } else {
    array.push(x); //push newly assigned var x to the array
  }
	sumInputs(); //run sum function, updates display accordingly
}

//********************************************************************** SUM and AVG FUNCTION*//
function sumInputs () {
	var sum = 0;
	for( var i = 0; i < array.length; i++ ){
    sum += parseInt( array[i], 10 ); //parseInt function parses a string argument and returns an integer of the specified radix
	}

	var avg = sum/array.length;
	var displayAverage = avg.toFixed(2); //Fixes the displayed value to round to the nearest 2 decimal points
	
	console.log("SUM:" + sum); //check
	console.log("AVG:" + avg); //check
	
	document.getElementById("sumInputs").innerHTML = sum; //Write new sum into HTML document
	document.getElementById("avgInputs").innerHTML = displayAverage; //Write new avg into HTML document
}


//********************************************************************** RESET FUNCTION*//
function reset() {
  event.preventDefault();
  location.reload(); //refreshes the browser, essentially resetting the form
}
