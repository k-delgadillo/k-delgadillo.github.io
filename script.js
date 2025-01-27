function togglePress(elementId) {
    var button = document.getElementById(elementId);
    button.classList.toggle('pressed');
}

const winningColors = ["MediumSeaGreen", "Violet", "Yellow", "SteelBlue"];
var winningIndex = 0; 

function isWinner(winningSquares) {
    for (let i = 0; i < winningSquares.length; i++) {
        var elementId = winningSquares[i];
        var button = document.getElementById(winningSquares[i]);
        if (button.disabled || button.classList != "button pressed") {
            return false;
        }
    }
    for (let i = 0; i < winningSquares.length; i++) {
        var elementId = winningSquares[i];
        var button = document.getElementById(winningSquares[i]);
        button.disabled = true;
        button.style.backgroundColor = winningColors[winningIndex];
    }
    winningIndex++;
    return true;
}

function checkAnswer() {
    const naturalLogCorrect = ["12", "02", "20"];
    const sevenDenominatorCorrect = ["00", "10", "30"];
    const radicalInEquation = ["21", "11", "01"];
    const correctAnswer4 = ["22", "31", "32"];
    var allButtons = document.querySelectorAll(".button");
    var numPressed = 0;
    for (let i = 0; i < allButtons.length; i++) {
        var button = allButtons[i];
        if (!button.disabled && button.classList == "button pressed") {
            numPressed++;
        }
    }
    if (numPressed != 3) {
        alert("Select 3 squares to check.");
        return;
    }
    var winner = false;
    if (isWinner(naturalLogCorrect)) {
        alert("Congrats! All answers have a natural log in the solution!");
        winner = true;
    }
    if (isWinner(sevenDenominatorCorrect)) {
        alert("Congrats! All answers have a 7 in the denominator of the solution!");
        winner = true;
    }
    if (isWinner(radicalInEquation)) { 
        alert("Congrats! All these equations have radicals in them!")
        winner = true;
    }
    if (isWinner(correctAnswer4)) {
        alert("Congrats! All these equations have a squared term in them!")
        winner = true;
    }
    if (!winner) {
        alert("Good try, but that's not correct.  Try again.");
    }


}
const customMenu = document.getElementById('contextMenu');
function setUpRightClick(id) {
    var button = document.getElementById(id);
    button.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        window.open("explanations/" + id + ".html");

        /*
        const x = event.clientX;
        const y = event.clientY;
        alert(x+" "+y);
        customMenu.style.left = '${x}px';
        customMenu.style.top = '${y}px';
        index = id;
        customMenu.style.display = 'block';
        */
    })
    
}
for (let row = 0; row < 4; row++) {
    for (let column = 0; column < 3; column++) {
        setUpRightClick(row +""+ column);
    }
}

