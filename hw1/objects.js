//timer settings
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

//alert once time is up
var timeOut;

function timesUp() {
	timeOut = setTimeout(function(){
	alert("Sorry times up. Your total score was "+ score+". Better luck next time~");
	location.reload(); 
	}, 122000);
}

//on click function to start game play and timer countdown
function startGame() {
  document.getElementById("gameContents").classList.remove("hidden");
	
	var twoMinutes = 60 * 2,
	display = document.querySelector('#time');
	startTimer(twoMinutes, display)
	timesUp();
}

//score tracker
var score = 0;
console.log("Score: "+ score);



//creates random addition or multiplication problem and determines the answer for each question
function newProblem(){
	
	var operatorsArray = ["plus", "times"];

	var randomOperator = operatorsArray[(Math.random() * operatorsArray.length) | 0]
	console.log("Random Operator: " + randomOperator);
	
	var random1 = Math.floor((Math.random() * 10) + 1); 
	console.log("Random Number 1: " + random1); //works

	var random2 = Math.floor((Math.random() * 10) + 1);
	console.log("Random Number 2: " + random2); //works
	
	document.getElementById("score").innerHTML = score;
	document.getElementById("randomNumber1").innerHTML = random1;
	document.getElementById("randomNumber2").innerHTML = random2;
	document.getElementById("operators").innerHTML = randomOperator;
	
	if(randomOperator == "plus") {
		document.getElementById("operatorColorSwitch").classList.remove("darkpink");
		document.getElementById("operatorColorSwitch").classList.add("blue");
		var answer = random1 + random2;
		console.log("Answer: " + answer);
		correctAnswer = answer;
	}
	else {
		document.getElementById("operatorColorSwitch").classList.remove("blue");
		document.getElementById("operatorColorSwitch").classList.add("darkpink");
		var answer = random1 * random2;
		console.log("Answer: " + answer);
		correctAnswer = answer;
	} 
}

newProblem();

//takes the player's answer and checks it with the correct answer, if true the score increases by 10

function playerAnswer() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("playerAnswer").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x)) {
        text = "Input not valid.";
    } else {
				if (x != correctAnswer) {
					document.getElementById("notifications").classList.remove("green");
					document.getElementById("notifications").classList.add("red");
					text = "Sorry, that's incorrect."
				}
				else {
					score = score + 10;
					document.getElementById("notifications").classList.remove("red");
					document.getElementById("notifications").classList.add("green");
					document.getElementById("score").innerHTML = score;
					text = "Correct!"
				}
    }
    document.getElementById("notifications").innerHTML = text;
		displayCat();
		newProblem();
		document.getElementById("playerAnswer").value = "";
}
	
function displayCat() {
	if (score == 0) {
		document.getElementById("cat").src="https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/catcharacter.jpg";
	} else if (score == 10) {
		document.getElementById("cat").src="https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/catcharacter2.jpg";
	} else if (score == 20) {
		document.getElementById("cat").src="https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/catcharacter3.jpg";
	} else if (score == 30) {
		document.getElementById("cat").src= "https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/catcharacter4.jpg";
	} else if (score == 40) {
		document.getElementById("cat").src="https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/catcharacter5.jpg";
	} else if (score == 50) {
		document.getElementById("cat").src="https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/catcharacter6.jpg";
	} else if (score == 60) {
		document.getElementById("cat").src= "https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/catcharacter7.jpg";
	} else if (score == 70) {
		document.getElementById("cat").src="https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/catcharacter8.jpg";
	} else if (score == 80) {
		document.getElementById("cat").src="https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/catcharacter9.jpg";
	} else if (score == 90) {
		document.getElementById("cat").src="https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/catcharacter10.jpg";
	} else if (score == 100) {
		alert("Congratulations, you've done such a great job feeding the stray that his belly just exploded!!!");
		document.getElementById("cat").src="https://s3-us-west-2.amazonaws.com/mijitron/cat-math-project/bomb-cat.gif";
		location.reload(); 
	}
}


