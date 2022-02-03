const btn = document.getElementById('container');
const gameBoard = document.getElementById('game-board')
const battlefield = Math.floor(Math.random() *3) + 1;
const gameStarted = new Audio();
const gameMusic = new Audio();
gameStarted.src = "./audio/drums.wav"
gameMusic.src = "./audio/battle.mp3"


window.onload = () => {
    document.getElementById('start-button-vs').onclick = () => {
      gameStarted.play();
      startGameVs();
      btn.style.display = 'none';
      gameBoard.style.display = 'flex'
    };
  
    function startGameVs() {
      const game = new Game();
      game.start();
      gameMusic.play();
    }

    document.getElementById('start-button-three').onclick = () => {
      gameStarted.play();
      startGameThree();
      btn.style.display = 'none';
      gameBoard.style.display = 'flex'
    };
  
    function startGameThree() {
      const game = new Game();
      game.startThree();
      gameMusic.play();
    }

    document.getElementById('start-button-ai').onclick = () => {
      gameStarted.play();
      startGameAi();
      btn.style.display = 'none';
      gameBoard.style.display = 'flex'
    };
    
      function startGameAi() {
        const game = new Game();
        game.start();
        game.startAi();
        gameMusic.play();
      }
  };