const blueArmy2 = [];

class Controls {
    constructor(game) {
      this.game = game;
      this.soldier = this.game.soldier;
    }

    //keyboard events added here, but I assume they should be moved to soldier.js
  
    keyboardEvents() {
      window.addEventListener('keydown', (e) => {
        switch (e.code) {
          case 'ArrowRight':
              this.soldier.x += 100;
            
            break;
          case 'ArrowLeft':
              this.car.x -= 100;
              break;
        }
      });
    }
  }
