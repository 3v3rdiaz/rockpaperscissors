let roundHold = 0;

var countRounds;

function returnRounds()
{
    countRounds = parseInt(document.getElementById("rounds").value);
    localStorage.setItem("cr", countRounds);
    return countRounds;
};

var userInput = document.getElementById("rounds");
userInput.addEventListener("keypress", returnRounds);
// window.location.href="rock-paper-scissors.html"; remove this soon potentially