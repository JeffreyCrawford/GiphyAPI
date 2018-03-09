/* QUESTION OBJECTS */
var q0 = {
	question: "",
	a: "",
	b: "",
	c: "",
	d: "",
	answer: "",
	pull: this.pullQuestionApply,
}
var q1 = {
	question: "In which country was the Gallipoli landing?",
	a: "France",
	b: "Germany",
	c: "Australia",
	d: "Turkey",
	answer: "d",
	pull: this.pullQuestionApply,
}  
var q2 = {
	question: "Which of the following was not a cause of WWI?",
	a: "Nationalism",
	b: "Balkan war",
	c: "Hundred Year war",
	d: "Franco-Prussian war",
	answer: "c",
	pull: this.pullQuestionApply,
}  
var q3 = {
	question: "Which countries were not in the Triple Entente in 1914?",
	a: "USA",
	b: "Russia",
	c: "Italy",
	d: "Belgium",
	answer: "b",
	pull: this.pullQuestionApply,
}  
var q4 = {
	question: "All of these were major battles of WWI except:",
	a: "Battle of the Somme",
	b: "Battle of the Marne",
	c: "Battle of Antietam",
	d: "Battle of Gallipoli",
	answer: "c",
	pull: this.pullQuestionApply,
}  
var q5 = {
	question: "In which year did the battle of Verdun start?",
	a: "1914",
	b: "1915",
	c: "1916",
	d: "1917",
	answer: "c",
	pull: this.pullQuestionApply,
}  
var q6 = {
	question: "What is the maneuver warfare?",
	a: "A strategy to defeat the enemy by movement",
	b: "It's name of a treaty",
	c: "A strategy to defeat the enemy by remaining on his positions",
	d: "A British soldiers squad",
	answer: "a",
	pull: this.pullQuestionApply,
}  
var q7 = {
	question: "During which years did the Attrition warfare take place?",
	a: "Between 1914-1917",
	b: "Between 1915-1917",
	c: "Between 1914-1918",
	d: "Between 1915-1918",
	answer: "b",
	pull: this.pullQuestionApply,
}  
var q8 = {
	question: "Which country made the first declaration of war?",
	a: "Serbia",
	b: "Austria-Hungary",
	c: "Italy",
	d: "Germany",
	answer: "b",
	pull: this.pullQuestionApply,
}  
var q9 = {
	question: "Which German attack provoked Britain to go to war?",
	a: "The attack on France",
	b: "The attack on Luxembourg",
	c: "The attack on Belgium",
	d: "The attack on Russia",
	answer: "c",
	pull: this.pullQuestionApply,
}  
var q10 = {
	question: "Which country joined the war on the side of the Allied Powers in 1916?",
	a: "Romania",
	b: "Serbia",
	c: "Greece",
	d: "USA",
	answer: "a",
	pull: this.pullQuestionApply,
}  
var q11 = {
	question: "What country are the members of the Black Hand Society from?",
	a: "Sweden",
	b: "Germany",
	c: "Czechoslovakia",
	d: "Serbia",
	answer: "d",
	pull: this.pullQuestionApply,
}  
var q12 = {
	question: "On what date did the United States declare war on Germany?",
	a: "July 3, 1914",
	b: "April 6, 1917",
	c: "November 4, 1917",
	d: "USA did not declared the war on Germany.",
	answer: "b",
	pull: this.pullQuestionApply,
}  
var q13 = {
	question: "Who was the commander of U.S. forces in Europe?",
	a: "John J. Pershing",
	b: "Joseph Joffre",
	c: "Theodore Roosevelt",
	d: "David Lloyd George",
	answer: "a",
	pull: this.pullQuestionApply,
}  
var q14 = {
	question: "In what battle did the German Army first use Mustard gas as a weapon of war?",
	a: "Ypres",
	b: "Vimy Ridge",
	c: "Sommes",
	d: "Passchendale",
	answer: "a",
	pull: this.pullQuestionApply,
}  
var q15 = {
	question: "What was the area in between trenched called during WWI?",
	a: "The great soldier zone",
	b: "The Dead zone",
	c: "No man's land",
	d: "No tolerance land",
	answer: "c",
	pull: this.pullQuestionApply,
}  
var q16 = {
	question: "What is a German U boat?",
	a: "U shaped rubber dingy",
	b: "Navy Destroyer",
	c: "Ocean troop carrier",
	d: "Submarine",
	answer: "d",
	pull: this.pullQuestionApply,
}  
var q17 = {
	question: "In 1918, the city of Paris suffered repeated attacks from German of",
	a: "Poison Gas",
	b: "Tanks",
	c: "Napalm",
	d: "Long-range artillery",
	answer: "d",
	pull: this.pullQuestionApply,
}  
var q18 = {
	question: "Who won WWI?",
	a: "Allies in 1918",
	b: "Central Powers in 1917",
	c: "Allies in 1917",
	d: "Central power and Neutral power in 1918",
	answer: "a",
	pull: this.pullQuestionApply,
}  
var q19 = {
	question: "When was the Armistice between Germany and France signed?",
	a: "28 June 1918",
	b: "11 November 1918",
	c: "11 November 1919",
	d: "28 June 1919",
	answer: "b",
	pull: this.pullQuestionApply,
}  
var q20 = {
	question: "When and where was the treaty between France and Germany signed?",
	a: "In 1918, under the Arc de Triomphe in Paris",
	b: "In 1919, under the Arc de Triomphe in Paris",
	c: "In 1918, in a Wagon at Versailles",
	d: "In 1919, in the Hall of Mirrors at Versailles",
	answer: "d",
	pull: this.pullQuestionApply,
}

/* COUNTERS */
var correctAnswers = 0;
var incorrectAnswers = 0;
var missedAnswers = 0;


/* QUESTION CYCLE ARRAYS */
var questionArray = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];
var tempArray = [];


/* CLOCK VARIABLES */
var clockRunning = false;
var clock = {

	time: 15,
	start: function() {
		if(clockRunning === false && clock.time !== 0) {
			interval = setInterval(clock.countdown, 1000)
			clockRunning = true;
		}
	},
	stop: function() {
		if(clockRunning === true) {
		clearInterval(interval);
		clockRunning = false;
		}
	},
	countdown: function() {
		clock.time--;
		$(".timeRemaining").text(clock.time);
		if (clock.time === 0) {
		clock.stop();
		timesUp();
		}
	},
	reset: function() {
		clock.stop();
		clock.time = 15;
		$(".timeRemaining").text(clock.time);
	},
}


/* SPECIAL LOAD FUNCTIONS */
function pullQuestionApply() {
	/* PULLS THE DESIGNATED OBJECT'S DETAILS TO THE PAGE */
    $(".questionText").text(questionArray[0].question);
    $(".answerAText").text(questionArray[0].a);
    $(".answerBText").text(questionArray[0].b);
    $(".answerCText").text(questionArray[0].c);
    $(".answerDText").text(questionArray[0].d);
}
function populateDivs() {
	/* LOAD THE NECESSARY DIVS ONTO THE PAGE */
	$(".timeHeader").html("<h3 class='timeRemainingHeader'>Time Remaining:</h3>  <h3 class='timeRemaining'></h3> <br>");
	$(".question").html("<h3 class='questionText'></h3>");
	$(".A").html("<div class='col answer answerA'><h3 class='answerHeader'>A: </h3> <h3 class='answerText answerAText'></h3> <br></div>");
	$(".B").html("<div class='col answer answerB'><h3 class='answerHeader'>B: </h3> <h3 class='answerText answerBText'></h3> <br></div>");
	$(".C").html("<div class='col answer answerC'><h3 class='answerHeader'>C: </h3> <h3 class='answerText answerCText'></h3> <br></div>");
	$(".D").html("<div class='col answer answerD'><h3 class='answerHeader'>D: </h3> <h3 class='answerText answerDText'></h3> <br></div>");
}
function loadQuestion() {
	/* IF QUESTIONS REMAIN: LOAD NEXT QUESTION, ELSE: SHOW GAME OVER SCREEN  */
	if (questionArray.length > 1) {	

		/* PUSH QUESTION DIVS TO PAGE*/
		populateDivs();

		/* QUESTION ARRAY/DISPLAY MANAGEMENT */
		tempArray.push(questionArray[0]);
		questionArray.shift();
		questionArray[0].pull();

		/* RESET COLORS */
		$(".answerText").css("color", "black")
		$(".answer").css("color", "black");
		$("questionText").css("color", "black");

		/* RESET/START CLOCK */
		clock.reset();
		clock.start();
	}
	else {
		gameOverScreen();
	}
}


/* EVENT SCREENS */
function gameStartScreen() {
	$(".timeHeader").html("<h3 class='startButton'>Welcome to Great War Trivia! Click Here to Begin!</h3>");
}
function correctScreen() {
	/* COLOR CHOSEN/CORRECT ANSWER */
	$(".questionText").text("Correct!");
	$(".questionText").css("color", "green");
	$(event.target).children().css("color", "green");
	$(event.target).parent().children().css("color", "green");
}
function incorrectScreen() {
	/* SHOW TEXT "WRONG" AND COLOR CHOSEN ANSWER */
	$(".questionText").text("Wrong!");
	$(".questionText").css("color", "red");
	$(event.target).children().css("color", "red");
	$(event.target).parent().children().css("color", "red");

	/* COLOR CORRECT ANSWER */
	var answerCode = questionArray[0].answer.toUpperCase();
	$("." + "answer" + answerCode).children().css("color", "green");
}
function timesUpScreen() {
	/* SHOW TEXT "TIME'S UP" AND COLOR CORRECT ANSWER */
	$(".questionText").text("Time's Up!");
	$(".questionText").css("color", "red");
	var answerCode = questionArray[0].answer.toUpperCase();
	$("." + "answer" + answerCode).children().css("color", "green");
}
function gameOverScreen() {
	clock.stop();
	/* SHOW TEXT "GAME OVER" AND NUMBER OF CORRECT/WRONG/MISSED */
	$(".questionText").text("Game Over!");
	$(".answerA").text("Correct Guesses: " + correctAnswers);
	$(".answerB").text("Wrong Guesses: " + incorrectAnswers);
	$(".answerC").text("Missed Guesses: " + missedAnswers);
	$(".answerD").text("Start Over?");

	/* FORMAT COUNTS */
	$(".answerA").addClass("h3")
	$(".answerB").addClass("h3")
	$(".answerC").addClass("h3")
	$(".answerD").addClass("h3 startOver")

}


/* EVENT/GUESS FUNCTIONS */
function guessCorrect() {
	/* INCREMENT CORRECT ANSWERS VARIABLE AND SHOW CORRECT GUESS SCREEN */
	correctAnswers++;
	correctScreen();
}
function guessIncorrect() {
	/* INCREMENT WRONG ANSWERS VARIABLE AND SHOW INCORRECT GUESS SCREEN */
	incorrectAnswers++;
	incorrectScreen();
}
function timesUp() {
	/* INCREMENT MISSED ANSWERS VARIABLE AND SHOW TIME'S UP SCREEN, THEN LOAD NEXT QUESTION */
	missedAnswers++;
	timesUpScreen();
	setTimeout(loadQuestion, 7000);
}
function checkGuess(x) {
	/* IF A QUESTION IS NOT ACTIVE, DO NOT ACCEPT INPUTS */
	if (clockRunning === true) {
		/* STOP THE CLOCK AND CHECK IF THE GUESS IS CORRECT, RUN APPROPRIATE GUESS FUNCTION */
		clock.stop();
		if(questionArray[0].answer === x) {
			guessCorrect();
		} 
		else {
			guessIncorrect();
		}
		/* WAIT AND THEN LOAD THE NEXT QUESTION */
		setTimeout(loadQuestion, 3000);
	}
	else {}
}


/* RESETS */
function resetArrays() {
	/* RETURN ALL USED QUESTIONS FROM TEMPARRAY TO QUESTIONARRAY IN ORDER AND EMPTY TEMPARRAY */
    tempArray.reverse();
    for (i = 0; i < tempArray.length; i++) {
        questionArray.unshift(tempArray[i]);
    };
    tempArray = [];
}
function resetScores() {
	/* RESET ALL SCORING TO 0 */
	correctAnswers = 0;
	incorrectAnswers = 0;
	missedAnswers = 0;
}
function resetGame() {
	/* RUN ALL RESET FUNCTIONS TO RETURN THE GAME TO THE FIRST QUESTION */
	resetArrays();
	resetScores();
	clock.reset();
}


$(document).ready(function() {
	/* RUN THE GAME START SCREEN ON PAGE LOAD */
	gameStartScreen();


	/* ANSWER ONCLICK EVENTS */
	$(".A").on("click", function() { 
			checkGuess("a");
	})
    $(".B").on("click", function() {
        checkGuess("b");
	})
    $(".C").on("click", function() {
        checkGuess("c");
	})
    $(".D").on("click", function() {
		/* IF THE GAME IS OVER, USE THIS AS A RESTART BUTTON, ELSE CHECK GUESS AS NORMAL */
		if (tempArray.length === 20) {
			$(".answerD").removeClass("startOver");
			$(".answerD").addClass("answer");
			resetGame();
			loadQuestion();
		}
		else {
			checkGuess("d");
		}
	})
	/* IF THE GAME HAS NOT BEGUN, USE THIS DIV AS A START BUTTON */
	$(".timeHeader").on("click", function() {
		if (tempArray.length === 0) {
			clock.start();
			loadQuestion();
		}
		else {}

	})
})