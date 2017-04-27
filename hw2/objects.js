var array = [];
function sumInputs(){
	var sum = 0;
	for( var i = 0; i < array.length; i++ ){
    sum += parseInt( array[i], 10 ); //parseInt function parses a string argument and returns an integer of the specified radix
	}
	var avg = sum/array.length;
	var displayAverage = avg.toFixed(2); //Fixes the displayed value to round to the nearest 2 decimal points
	var count = array.length;
	
	$("#count").text(count);
	$("#sumInputs").text(sum);
	$("#avgInputs").text(displayAverage);
}

var countS = 0;

function sumStrings(){
	countS += 1;
	$("#stringCount").text(countS);
}

$(document).ready(function(){
    $("#submit").click(function(){

				var x = $("#inputField").val(); 

				if (isNaN(x)) {
					$("#string").append(x + " ");
					sumStrings();
				} else {
					array.push(x);
					sumInputs();
				}
    });
		$("#submit").on("click", function(){
				
				})
    $("#reset").click(function(){
        event.preventDefault();
  			location.reload(); 	
    });
});


