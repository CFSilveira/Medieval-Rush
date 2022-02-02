const btn = document.getElementById('start-button');
const battlefield = Math.floor(Math.random() *3) + 1;
const gameStarted = new Audio();
gameStarted.src = "./audio/drums.wav"

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      gameStarted.play();
      startGame();
      btn.style.display = 'none';
    };
  
    function startGame() {
      const game = new Game();
      game.start();
    }
  };