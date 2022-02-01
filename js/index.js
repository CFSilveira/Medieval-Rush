const btn = document.getElementById('start-button');

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