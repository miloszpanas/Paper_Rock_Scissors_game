// Get the #newGameButton and assign EventListener on click

var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);


// what happens when paper/rock/scissors buttons are clicked

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

// the current game state
