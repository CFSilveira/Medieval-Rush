const btn = document.getElementById('start-button');
const battlefield = Math.floor(Math.random() *3) + 1;

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
      btn.style.display = 'none';
    };
  
    function startGame() {
      const game = new Game();
      game.start();
    }
  };