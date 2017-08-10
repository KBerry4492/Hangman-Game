

var gameRules = {

	// counters
	wins: 0,
	losses: 0,
	guessLeft: 8,
	guessWrong: [],
	placeHolders: [],
	pickedWord: [],

	// word list
	wordArray: ["circuit", "program", "user", "lightcycle", "recognizer", "grid", "dinghy"],
	
	// placeholders?
	guessedLetters: [],
	playerPick: "",
	getWord: [],

	// html alterations
	win_counter: document.getElementById("wins-div"),
	loss_counter: document.getElementById("wins-div"),
	guess_left: document.getElementById("guess-div"),

	// functions
	// newGame: function() {

	// }

	newGame: function(){

	 	this.getWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];

	 	this.pickedWord = this.getWord.split(""); 

	 	for (var i = 0; i < this.pickedWord.length; i++) {
	 		this.placeHolders.push("_");
	 	}

	 	blanksSpaces = this.placeHolders.join(" ");

	 	document.querySelector("#word-blanks").innerHTML = "<div>" + blanksSpaces + "<div>";
	 }

};

	if (gameRules.guessLeft > 0) {

		document.onkeyup = function(event) {
			gameRules.playerPick = event.key;
			// return this.playerPick;
			
			console.log(gameRules.guessedLetters);

			if (gameRules.guessedLetters.indexOf(gameRules.playerPick) === -1) {

				gameRules.guessedLetters.push(gameRules.playerPick);
				gameRules.guessedLetters.join(" ");

				for (var i = 0; i < gameRules.pickedWord.length; i++) {
					if (gameRules.playerPick ===  gameRules.pickedWord[i]) {
						gameRules.placeHolders[i] =  gameRules.playerPick;
					}
					// end if pp === i
					
				}

				console.log(gameRules.placeHolders)
				// end for i < pW

				if (gameRules.placeHolders.indexOf(gameRules.playerPick) === -1) {
					gameRules.guessLeft--;
				}
				// end if pP != guessed

				blanksSpaces = gameRules.placeHolders.join(" ");
				document.querySelector("#word-blanks").innerHTML = "<div>" + blanksSpaces + "<div>";

				if (blanksSpaces == gameRules.pickedWord) {
					document.querySelector("#game-over").innerHTML = "<div>" + "You Win!" + "<div>";

				}

			}
			// end if pP not in gL

		 	document.querySelector("#blank-spots").innerHTML = "<div>" + gameRules.guessedLetters + "<div>";
		 	console.log(gameRules.guessLeft);
		}
		// end onkeyup

	}
	// end if not lost

	else{
		document.querySelector("#game-over").innerHTML = "<div>  Game Over!  <div>";

	}



	// document.querySelector("#reset-button") = .on("click", function()){
	// 	gameRules.newGame();
	// }

// end of gameRules

gameRules.newGame();


console.log(gameRules.wordArray);
console.log(gameRules.getWord);
console.log(gameRules.placeHolders);


//object gameRules
//var guessLeft = 13;
//var guessWrong = [];
//var wordArray = ["", "", "", "", "", "", ""];
//var emptyArray = [];
// var getWord = wordAray[Math.random]
// var playerPick = event.key
// pickedLEtter = letterArray[Math.floor(Math.random() * letterArray.length)];



// if (playerPick === getWord

// for i i < getWord.length i++

// { append "_" to emptyArray}

// var wordLength = getWord.length

// on event.key 


// if playerPick.toLowerCase() == getWord[-1] && ==guessWrong[-1]
// 	guessLeft --
// apppend playerPick to guessWrong 


//else if 
// for getWord.length
// check playerPick.toLowerCase() against getWord[i]
	// if playerPick === getWord[i]
	// set emptyArray[i] to playerPick
	//
// if emptyArray[] === getWord
//  You win!

// if guessLeft == 0
//  You Lose