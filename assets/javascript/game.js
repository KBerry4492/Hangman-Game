

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
	blanksSpaces: [],
	playerPick: "",
	getWord: [],
	wordCheck: ["start"],
	wordCheckTwo: [],
	gameWon: false,

	newGame: function(){

		this.gameWon = false;
		this.guessLeft = 8;
		this.guessWrong = [];
		this.placeHolders = [];
		this.pickedWord = [];
		this.guessedLetters = [];
		this.playerPick = "";
		this.getWord = [];
		this.wordCheck = [];
		this.wordCheckTwo = [];
		this.blanksSpaces = [];

	 	this.getWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];

	 	this.pickedWord = this.getWord.split(""); 

	 	for (var i = 0; i < this.pickedWord.length; i++) {
	 		this.placeHolders.push("_");
	 	}

	 	blanksSpaces = this.placeHolders.join(" ");

	 	document.querySelector("#word-blanks").innerHTML = "<div>" + blanksSpaces + "<div>";
	 	document.querySelector("#guess-div").innerHTML =  "8" ;
	 	document.querySelector("#game-over").innerHTML = "";
	 	document.querySelector("#blank-spots").innerHTML = "<div>" + this.guessedLetters + "<div>";
	 	document.querySelector("#user-pic").innerHTML = "<img  id=\"hung-man\" src=\"assets/images/tron_user.jpg\" alt=\"Game Over\">";
	 },

	
	 keyPress: function(){


	 	if (this.guessedLetters.indexOf(this.playerPick) === -1 ) {
	 		// if the letter pressed is not in guessedLetters array

			this.guessedLetters.push(this.playerPick.toLowerCase());
			//add it to the array 

			//Excellent, it will take Uppercase inputs as well.  prints them uppercase too.  Counts pressing the Shift / CAPS LOCK key against you though.
			//Fair enough, its not a letter.
			for (var i = 0; i < this.pickedWord.length; i++) {
				// for the length of the picked word

				if (this.playerPick.toLowerCase() ===  this.pickedWord[i]) {
					//if the letter pressed is in that word

					this.placeHolders[i] =  this.playerPick;
					//replace the corrosponding blank spot with that letter

				}// end if 

				this.wordCheck[i] = this.pickedWord[i]
				
			}// end for 
		

			if (this.placeHolders.indexOf(this.playerPick) === -1  && gameRules.gameWon != true) {
				//if after the above, the letter picked is not in the placeholder array
				
				this.guessLeft--;
				//depreciate guessLeft

				document.querySelector("#guess-div").innerHTML =  this.guessLeft ;
				//and write it to the HTMl

			}// end if pP != guessed

			this.wordCheckTwo = this.placeHolders;

			this.blanksSpaces = this.placeHolders.join(" ");

			document.querySelector("#word-blanks").innerHTML = "<div>" + this.blanksSpaces + "<div>";
		
		}// end if pP not in gL		

	 	document.querySelector("#blank-spots").innerHTML = "<div>" + gameRules.guessedLetters + "<div>";

	 	if (this.wordCheck.toString() == this.wordCheckTwo.toString() && this.gameWon === false) {
		
			document.querySelector("#game-over").innerHTML = "<div>" + "You Win!" + "<div>";
			document.querySelector("#user-pic").innerHTML = "<img  id=\"hung-man\" src=\"assets/images/tron_winner.jpg\" alt=\"Game Over\">";
			this.wins++
			document.querySelector("#wins-div").innerHTML =  this.wins ;
			this.gameWon = true;
			// you also (should) keep winning... that is a bug...

		
			}//end winning
		if (this.guessLeft == 0) {
			this.losses ++;
		}

	 }//end keyPress function

};//end object

document.querySelector("#wins-div").innerHTML =  "0" ;
document.querySelector("#loss-div").innerHTML =  "0" ;


document.onkeyup = function(event) {

	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	gameRules.playerPick = event.key;
	// return this.playerPick;

	if(alphabet.indexOf(gameRules.playerPick) === -1){
		alert("Press a letter.")		
	}

	else{
		if (gameRules.guessLeft == 0 && gameRules.gameWon != true) {
			document.querySelector("#game-over").innerHTML = "<div>" + "You Lose!" + "<div>";
			document.querySelector("#user-pic").innerHTML = "<img  id=\"hung-man\" src=\"assets/images/gameOver.png\" alt=\"Game Over\">";
			document.querySelector("#loss-div").innerHTML =  gameRules.losses ;
			// If you keep pressing buttons, you keep losing. its a feature, not a bug :P

			}
		
		else{

			gameRules.keyPress();
		}
	}
	console.log("wordCheck");
	console.log(gameRules.wordCheck);
	console.log("wordCheckTwo");
	console.log(gameRules.wordCheckTwo);

}// end onkeyup

	var resetGame = document.querySelector("#reset-button");

	resetGame.addEventListener ("click", function() {
  		gameRules.newGame();
	});
// end of gameRules

gameRules.newGame();