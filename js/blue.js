const blueArmy = [];

class Controls {
    constructor(game) {
      this.game = game;
      this.soldier = this.game.soldier;
    }
  
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
