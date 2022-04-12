const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
// let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];
// console.log(rightGuessString);

// Global jQuery Elements
const startGameContainer = $("#start-game-container");

const onload = () => {
  let board = document.getElementById("game-board");
  for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
    let row = document.createElement("div");
    row.className = "letter-row";

    for (let j = 0; j < 5; j++) {
      let box = document.createElement("div");
      box.className = "letter-box";
      row.appendChild(box);
    }

    board.appendChild(row);
  }
};

const generateWord = async (event) => {
  console.log(event);
  const target = event.target;
  console.log(target);

  if ($(target).is("#start-game-btn")) {
    const response = await fetch(`/api/words/`);

    const { data } = await response.json();

    console.log(data);
  }
};

onload();

startGameContainer.on("click", generateWord);
