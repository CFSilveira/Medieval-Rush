class Controls {
    constructor(game) {
      this.game = game;
      this.blueArmy = this.game.blueArmy;
      this.redArmy = this.game.redArmy;
    }

    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
          switch (e.code) {
            
            //blue team movement
            case 'Space':
                console.log('Space bar pressed');
                for (let i = 0; i < this.blueArmy.length; i++){
                    if (this.blueArmy[i].isSelected) {
                        console.log('Blue changed unit being controlled');
                        this.blueArmy[i].isSelected = false;
                        let nextUnit = (i+1) % this.blueArmy.length;
                        this.blueArmy[nextUnit].isSelected = true;
                        break;
                    }
                }
                break;

            case 'KeyD':
                console.log('D pressed');
                for (let i = 0; i < this.blueArmy.length; i++){
                    if (this.blueArmy[i].isSelected) {
                        console.log(`Unit on square ${this.blueArmy[i].gps} moves right`);
                        this.blueArmy[i].facing = 'right';
                        this.blueArmy[i].x += 100;
                    }
                }
                break;

            case 'KeyA':
                console.log('A pressed');
                for (let i = 0; i < this.blueArmy.length; i++){
                    if (this.blueArmy[i].isSelected) {
                        console.log(`Unit on square ${this.blueArmy[i].gps} moves left`);
                        this.blueArmy[i].facing = 'left';
                        this.blueArmy[i].x -= 100;
                    }
                }
                break;

            case 'KeyW':
                console.log('W pressed');
                for (let i = 0; i < this.blueArmy.length; i++){
                    if (this.blueArmy[i].isSelected) {
                        console.log(`Unit on square ${this.blueArmy[i].gps} moves up`);
                        this.blueArmy[i].y -= 100;
                    }
                }
                break;

            case 'KeyS':
                console.log('S pressed');
                for (let i = 0; i < this.blueArmy.length; i++){
                    if (this.blueArmy[i].isSelected) {
                        console.log(`Unit on square ${this.blueArmy[i].gps} moves down`);
                        this.blueArmy[i].y += 100;
                    }
                }
                break;

            //red team movement
            case 'NumpadEnter':
                console.log('NumpadEnter pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        console.log('Blue changed unit being controlled');
                        this.redArmy[i].isSelected = false;
                        let nextUnit = (i+1) % this.redArmy.length;
                        this.redArmy[nextUnit].isSelected = true;
                        break;
                    }
                }
                break;

            case 'ArrowRight':
                console.log('Right arrow pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        console.log(`Unit on square ${this.redArmy[i].gps} moves right`);
                        this.redArmy[i].facing = 'right';
                        this.redArmy[i].x += 100;
                        }
                    }
                break;

            case 'ArrowLeft':
                console.log('Left arrow pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        console.log(`Unit on square ${this.redArmy[i].gps} moves left`);
                        this.redArmy[i].facing = 'left';
                        this.redArmy[i].x -= 100;
                        }
                    }
                break;

            case 'ArrowUp':
                console.log('Up arrow pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        console.log(`Unit on square ${this.redArmy[i].gps} moves up`);
                        this.redArmy[i].y -= 100;
                        }
                    }
                break;

            case 'ArrowDown':
                console.log('Down arrow pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        console.log(`Unit on square ${this.redArmy[i].gps} moves down`);
                        this.redArmy[i].y += 100;
                        }
                    }
                break;
          }
          });
        }
    }
    


  
  
