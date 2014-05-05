var userChoice = prompt("Do you choose rock, paper or scissors?");

//This section makes the computer select "rock", "scissors" or "paper"
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

//compare, does exactly that. compares the value you selected and the valye the computer selected.
var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
//Check winner for players selection as "rock"
    } else if (choice === "rock") {
        if (choice2 === "scissors"){
            return("rock wins");
            } else {
                return("paper wins");
            }
        } 
//Check winner for players selection as "paper"
    else if (choice === "paper") {
        if (choice2 === "rock") {
            return("paper wins");
            } else {
                return("scissors wins");
                }
        }
//Only "scissors" are left for players to chose, so no IF to check for that.
//Checks remaining for computers choice
    else {
        if(choice2 === "rock"){
            return("rock wins");
            } else {
                return("paper wins");
                }
        }
    };

//prints out the result.
console.log(compare(userChoice, computerChoice));
