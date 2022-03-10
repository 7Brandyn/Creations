
var userChoice = prompt("Choose rock, paper or scissors: ");
        
    if (! userChoice) {
        document.write("<p><strong>Player:</strong> I see what you did there (maybe check your spelling).</p>");
    }
    else if (userChoice == "rock" || userChoice == 	"paper" || userChoice == "scissors") {
        document.write("<p><strong>Player:</strong> " + userChoice + "</p>");
    }
    else {
        document.write("<p><strong>Player:</strong> I see what you did there (maybe check your spelling).</p>");
    }
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
    computerChoice = "rock";
    }
    else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    }
    else {computerChoice = "scissors";
    }

    document.write("<p><strong>Computer: </strong>" + computerChoice + "</p>");
        
        var compare = function(choice1, choice2) {
if (choice1 == choice2) {
    return "It's a tie!"
}
if (choice1 == "rock") {
    if (choice2 == "scissors") {
        return "You win! Rock smashes scissors."
    }
    else {
        return "You lose! Paper covers rock."
    }
}
    if (choice1 == "paper") {
    if (choice2 == "rock") {
        return "You win! Paper covers rock."
    }
    else {
        return "You lose! Scissors cut paper."
    }
}
if (choice1 == "scissors") {
    if (choice2 == "paper") {
        return "You win! Scissors cut paper."
    }
    else {
        return "You lose! Rock smashes scissors."
    }
}

};
    
    var results = compare(computerChoice, userChoice);
    document.write("<br> <br>" + results);
