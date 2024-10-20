// Function to generate a random number between 1 and 10 by the machine outside the loop to have it once during the game
function randomNum() {
    return Math.floor(Math.random() * 10) + 1; // Generates number from 1 to 10 with the Math.random method
}

randomNum();

// function to play the game
function guessTheNumber() {
    // variable to use the generated random number from the computer and compare it to the user input
    var computerNum = randomNum();

    // boolean variable to check whether the correct number has been guessed
    var correctGuess = false;
    
    // Loop to allow guesses until the user gets the correct number
    while (!correctGuess) {
        // Ask the user to input a number with a prompt
        var yourGuess = prompt("Guess which number the computer has. Pick a number between 1 and 10");
        
        // end the game by pressing Cancel in the prompt
        if (yourGuess === null) {
            alert ("You stopped the game.");
            break;
        }

        // Convert the user's guess to a number
        yourGuess = parseInt(yourGuess);

        // Returns the guess and whether that guess is lower or higher than the random number. E.g., "You answered 9. The correct answer is higher."
        if (yourGuess < computerNum) {
            alert("You guessed " + yourGuess + ". The correct answer is higher. Try again.");
        } else if (yourGuess > computerNum) {
            alert("You guessed " + yourGuess + ". The correct answer is lower. Try again.");
        } else if (yourGuess === computerNum) {
            alert("The computer number was " + computerNum + ". You guessed " + yourGuess + ". This is the correct answer! Congratulations!");
            correctGuess = true; // End the loop when the correct answer is guessed
        } 
    }
}

// Call the function to start the game
guessTheNumber();