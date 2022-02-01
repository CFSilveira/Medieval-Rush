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
                        if (this.blueArmy[i].stamina < 5) {
                            break;
                        }
                        let futurePosition = ((this.blueArmy[i].x + 100) / 100).toString() + (this.blueArmy[i].y / 100).toString();
                        let friendlyFire;
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        let enemyFire;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                enemyFire = true;                                
                            }
                        });
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemyFire === true) {
                            console.log('Fight!');
                        } else {
                            console.log(`Unit on square ${this.blueArmy[i].gps} moves right to ${futurePosition}`);
                            this.blueArmy[i].facing = 'right';
                            this.blueArmy[i].x += 100;
                            this.blueArmy[i].stamina = 0;
                            this.blueArmy[i].gps = (this.blueArmy[i].x / 100).toString() + (this.blueArmy[i].y / 100).toString();
                        }

                    }
                }
                break;

            case 'KeyA':
                console.log('A pressed');
                for (let i = 0; i < this.blueArmy.length; i++){
                    if (this.blueArmy[i].isSelected) {
                        if (this.blueArmy[i].stamina < 5) {
                            break;
                        }
                        let futurePosition = ((this.blueArmy[i].x - 100) / 100).toString() + (this.blueArmy[i].y / 100).toString();
                        let friendlyFire;
                        console.log(`Unit on square ${this.blueArmy[i].gps} moves left to ${futurePosition}`);
                        this.blueArmy[i].facing = 'left';
                        this.blueArmy[i].x -= 100;
                        this.blueArmy[i].stamina = 0;
                        this.blueArmy[i].gps = (this.blueArmy[i].x / 100).toString() + (this.blueArmy[i].y / 100).toString();
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === this.blueArmy[i].gps) {
                                console.log('Ouch!');
                            }
                    });  
                }
            }
                break;

            case 'KeyW':
                console.log('W pressed');
                for (let i = 0; i < this.blueArmy.length; i++){
                    if (this.blueArmy[i].isSelected) {
                        if (this.blueArmy[i].stamina < 5) {
                            break;
                        }
                        console.log(`Unit on square ${this.blueArmy[i].gps} moves up`);
                        this.blueArmy[i].y -= 100;
                        this.blueArmy[i].stamina = 0;
                        this.blueArmy[i].gps = (this.blueArmy[i].x / 100).toString() + (this.blueArmy[i].y / 100).toString()
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === this.blueArmy[i].gps) {
                                console.log('Ouch!');
                            }
                    });  
                }
            }
                break;

            case 'KeyS':
                console.log('S pressed');
                for (let i = 0; i < this.blueArmy.length; i++){
                    if (this.blueArmy[i].isSelected) {
                        if (this.blueArmy[i].stamina < 5) {
                            break;
                        }
                        console.log(`Unit on square ${this.blueArmy[i].gps} moves down`);
                        this.blueArmy[i].y += 100;
                        this.blueArmy[i].stamina = 0;
                        this.blueArmy[i].gps = (this.blueArmy[i].x / 100).toString() + (this.blueArmy[i].y / 100).toString()
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === this.blueArmy[i].gps) {
                                console.log('Ouch!');
                            }
                    });  
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
                        if (this.redArmy[i].stamina < 5) {
                            break;
                        }
                        console.log(`Unit on square ${this.redArmy[i].gps} moves right`);
                        this.redArmy[i].facing = 'right';
                        this.redArmy[i].x += 100;
                        this.redArmy[i].stamina = 0;
                        this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString()
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === this.redArmy[i].gps) {
                                console.log('Ouch!');
                            }
                        });
                    }
                }
                break;

            case 'ArrowLeft':
                console.log('Left arrow pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        if (this.redArmy[i].stamina < 5) {
                            break;
                        }
                        console.log(`Unit on square ${this.redArmy[i].gps} moves left`);
                        this.redArmy[i].facing = 'left';
                        this.redArmy[i].x -= 100;
                        this.redArmy[i].stamina = 0;
                        this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString()
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === this.redArmy[i].gps) {
                                console.log('Ouch!');
                            }
                        });
                        }
                    }
                break;

            case 'ArrowUp':
                console.log('Up arrow pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        if (this.redArmy[i].stamina < 5) {
                            break;
                        }
                        console.log(`Unit on square ${this.redArmy[i].gps} moves up`);
                        this.redArmy[i].y -= 100;
                        this.redArmy[i].stamina = 0;
                        this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString()
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === this.redArmy[i].gps) {
                                console.log('Ouch!');
                            }
                        });
                        }
                    }
                break;

            case 'ArrowDown':
                console.log('Down arrow pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        if (this.redArmy[i].stamina < 5) {
                            break;
                        }
                        console.log(`Unit on square ${this.redArmy[i].gps} moves down`);
                        this.redArmy[i].y += 100;
                        this.redArmy[i].stamina = 0;
                        this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString()
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === this.redArmy[i].gps) {
                                console.log('Ouch!');
                            }
                        });
                        }
                    }
                break;
          }
          });
        }
    
}
    


  
  
