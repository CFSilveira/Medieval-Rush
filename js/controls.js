class Controls {
    constructor(game) {
      this.game = game;
      this.blueArmy = this.game.blueArmy;
      this.redArmy = this.game.redArmy;
      this.yellowArmy = this.game.yellowArmy;
      this.baseArray = this.game.baseArray;
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
                        if ((this.blueArmy[i].x + 100) > 1100) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = ((this.blueArmy[i].x + 100) / 100).toString() + (this.blueArmy[i].y / 100).toString();
                        let friendlyFire;
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        let enemy;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                enemy = redsoldier;                                
                            }
                        });
                        this.yellowArmy.forEach((yellowArmy) => {
                            if (yellowArmy.gps === futurePosition) {
                                enemy = yellowArmy;                                
                            }
                        });

                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.blueArmy[i].stamina = 0;
                            this.fight(this.blueArmy[i], enemy);
                        } else {
                            console.log(`Unit on square ${this.blueArmy[i].gps} moves right to ${futurePosition}`);
                            this.blueArmy[i].facing = 'right';
                            this.blueArmy[i].x += 100;
                            this.blueArmy[i].stamina = 0;
                            this.blueArmy[i].gps = (this.blueArmy[i].x / 100).toString() + (this.blueArmy[i].y / 100).toString();
                            this.baseArray.forEach((base) => {
                                if (base.gps === futurePosition) {
                                    base.faction = 'blue';
                                }
                            });
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
                        if ((this.blueArmy[i].x - 100) < 0) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = ((this.blueArmy[i].x - 100) / 100).toString() + (this.blueArmy[i].y / 100).toString();
                        let friendlyFire;
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        let enemy;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                enemy = redsoldier;                                
                            }
                        });
                        this.yellowArmy.forEach((yellowArmy) => {
                            if (yellowArmy.gps === futurePosition) {
                                enemy = yellowArmy;                                
                            }
                        });

                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.blueArmy[i].stamina = 0;
                            this.fight(this.blueArmy[i], enemy);
                        } else {
                        console.log(`Unit on square ${this.blueArmy[i].gps} moves left to ${futurePosition}`);
                        this.blueArmy[i].facing = 'left';
                        this.blueArmy[i].x -= 100;
                        this.blueArmy[i].stamina = 0;
                        this.blueArmy[i].gps = (this.blueArmy[i].x / 100).toString() + (this.blueArmy[i].y / 100).toString();
                        this.baseArray.forEach((base) => {
                            if (base.gps === futurePosition) {
                                base.faction = 'blue';
                            }
                        });
                }
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
                        if ((this.blueArmy[i].y - 100) < 0) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = (this.blueArmy[i].x / 100).toString() + ((this.blueArmy[i].y - 100) / 100).toString();
                        let friendlyFire;
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        let enemy;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                enemy = redsoldier;                                
                            }
                        });
                        this.yellowArmy.forEach((yellowArmy) => {
                            if (yellowArmy.gps === futurePosition) {
                                enemy = yellowArmy;                                
                            }
                        });
                        
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.blueArmy[i].stamina = 0;
                            this.fight(this.blueArmy[i], enemy);
                        } else {
                        console.log(`Unit on square ${this.blueArmy[i].gps} moves up to ${futurePosition}`);
                        this.blueArmy[i].y -= 100;
                        this.blueArmy[i].stamina = 0;
                        this.blueArmy[i].gps = (this.blueArmy[i].x / 100).toString() + (this.blueArmy[i].y / 100).toString()
                        this.baseArray.forEach((base) => {
                            if (base.gps === futurePosition) {
                                base.faction = 'blue';
                            }
                        });
                }
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
                        if ((this.blueArmy[i].y + 100) > 700) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = (this.blueArmy[i].x / 100).toString() + ((this.blueArmy[i].y + 100) / 100).toString();
                        let friendlyFire;
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        let enemy;

                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                enemy = redsoldier;                                
                            }
                        });
                        this.yellowArmy.forEach((yellowArmy) => {
                            if (yellowArmy.gps === futurePosition) {
                                enemy = yellowArmy;                                
                            }
                        });

                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.blueArmy[i].stamina = 0;
                            this.fight(this.blueArmy[i], enemy);
                        } else {
                        console.log(`Unit on square ${this.blueArmy[i].gps} moves down to ${futurePosition}`);
                        this.blueArmy[i].y += 100;
                        this.blueArmy[i].stamina = 0;
                        this.blueArmy[i].gps = (this.blueArmy[i].x / 100).toString() + (this.blueArmy[i].y / 100).toString()
                        this.baseArray.forEach((base) => {
                            if (base.gps === futurePosition) {
                                base.faction = 'blue';
                            }
                        });
                }
            }
        }
                break;

            //red team movement
            case 'Numpad0':
                console.log('Numpad0 pressed');
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

            case 'Numpad6':
                console.log('Numpad6 pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        if (this.redArmy[i].stamina < 5) {
                            break;
                        }
                        if ((this.redArmy[i].x + 100) > 1100) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = ((this.redArmy[i].x + 100) / 100).toString() + (this.redArmy[i].y / 100).toString();
                        let friendlyFire;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        let enemy;
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                enemy = bluesoldier;                                
                            }
                        });

                        this.yellowArmy.forEach((yellowArmy) => {
                            if (yellowArmy.gps === futurePosition) {
                                enemy = yellowArmy;                                
                            }
                        });

                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.redArmy[i].stamina = 0;
                            this.fight(this.redArmy[i], enemy);
                        } else {
                            console.log(`Unit on square ${this.redArmy[i].gps} moves right to ${futurePosition}`);
                            this.redArmy[i].facing = 'right';
                            this.redArmy[i].x += 100;
                            this.redArmy[i].stamina = 0;
                            this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString();
                            this.baseArray.forEach((base) => {
                                if (base.gps === futurePosition) {
                                    base.faction = 'red';
                                }
                            });

                        }

                    }
                }
                break;

            case 'Numpad4':
                console.log('Numpad4 pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        if (this.redArmy[i].stamina < 5) {
                            break;
                        }
                        if ((this.redArmy[i].x - 100) < 0) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = ((this.redArmy[i].x - 100) / 100).toString() + (this.redArmy[i].y / 100).toString();
                        let friendlyFire;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        let enemy;
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                enemy = bluesoldier;                                
                            }
                        });
                        this.yellowArmy.forEach((yellowArmy) => {
                            if (yellowArmy.gps === futurePosition) {
                                enemy = yellowArmy;                                
                            }
                        });
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.redArmy[i].stamina = 0;
                            this.fight(this.redArmy[i], enemy);
                        } else {
                        console.log(`Unit on square ${this.redArmy[i].gps} moves left to ${futurePosition}`);
                        this.redArmy[i].facing = 'left';
                        this.redArmy[i].x -= 100;
                        this.redArmy[i].stamina = 0;
                        this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString()
                        this.baseArray.forEach((base) => {
                            if (base.gps === futurePosition) {
                                base.faction = 'red';
                            }
                        });
                        }
                    }
                }
                break;

            case 'Numpad8':
                console.log('Numpad8 pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        if (this.redArmy[i].stamina < 5) {
                            break;
                        }
                        if ((this.redArmy[i].y - 100) < 0) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = (this.redArmy[i].x / 100).toString() + ((this.redArmy[i].y - 100) / 100).toString();
                        let friendlyFire;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        let enemy;
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                enemy = bluesoldier;                                
                            }
                        });
                        this.yellowArmy.forEach((yellowArmy) => {
                            if (yellowArmy.gps === futurePosition) {
                                enemy = yellowArmy;                                
                            }
                        });
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.redArmy[i].stamina = 0;
                            this.fight(this.redArmy[i], enemy);
                        } else {
                        console.log(`Unit on square ${this.redArmy[i].gps} moves up to ${futurePosition}`);
                        this.redArmy[i].y -= 100;
                        this.redArmy[i].stamina = 0;
                        this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString()
                        this.baseArray.forEach((base) => {
                            if (base.gps === futurePosition) {
                                base.faction = 'red';
                            }
                        });
                        }
                    }
                }
                break;

            case 'Numpad5':
                console.log('Numpad5 pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        if (this.redArmy[i].stamina < 5) {
                            break;
                        }
                        if ((this.redArmy[i].y + 100) > 700) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = (this.redArmy[i].x / 100).toString() + ((this.redArmy[i].y + 100) / 100).toString();
                        let friendlyFire;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        let enemy;
                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                enemy = bluesoldier;                                
                            }
                        });
                        this.yellowArmy.forEach((yellowArmy) => {
                            if (yellowArmy.gps === futurePosition) {
                                enemy = yellowArmy;                                
                            }
                        });
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.redArmy[i].stamina = 0;
                            this.fight(this.redArmy[i], enemy);
                        } else {
                        console.log(`Unit on square ${this.redArmy[i].gps} moves down to ${futurePosition}`);
                        this.redArmy[i].y += 100;
                        this.redArmy[i].stamina = 0;
                        this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString()
                        this.baseArray.forEach((base) => {
                            if (base.gps === futurePosition) {
                                base.faction = 'red';
                            }
                        });
                        }
                    }
                }
                break;

                //yellow team movement
                case 'ArrowLeft':
                console.log('Left Arrow pressed');
                for (let i = 0; i < this.yellowArmy.length; i++){
                    if (this.yellowArmy[i].isSelected) {
                        console.log('Yellow changed unit being controlled');
                        this.yellowArmy[i].isSelected = false;
                        let nextUnit = (i+1) % this.yellowArmy.length;
                        this.yellowArmy[nextUnit].isSelected = true;
                        break;
                    }
                }
                break;

            case 'KeyL':
                console.log('L pressed');
                for (let i = 0; i < this.yellowArmy.length; i++){
                    if (this.yellowArmy[i].isSelected) {
                        if (this.yellowArmy[i].stamina < 5) {
                            break;
                        }
                        if ((this.yellowArmy[i].x + 100) > 1100) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = ((this.yellowArmy[i].x + 100) / 100).toString() + (this.yellowArmy[i].y / 100).toString();
                        let friendlyFire;
                        this.yellowArmy.forEach((yellowsoldier) => {
                            if (yellowsoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        
                        let enemy;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                enemy = redsoldier;                                
                            }
                        });

                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                enemy = bluesoldier;                                
                            }
                        });
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.yellowArmy[i].stamina = 0;
                            this.fight(this.yellowArmy[i], enemy);
                        } else {
                            console.log(`Unit on square ${this.yellowArmy[i].gps} moves right to ${futurePosition}`);
                            this.yellowArmy[i].facing = 'right';
                            this.yellowArmy[i].x += 100;
                            this.yellowArmy[i].stamina = 0;
                            this.yellowArmy[i].gps = (this.yellowArmy[i].x / 100).toString() + (this.yellowArmy[i].y / 100).toString();
                            this.baseArray.forEach((base) => {
                                if (base.gps === futurePosition) {
                                    base.faction = 'yellow';
                                }
                            });
                        }

                    }
                }
                break;

            case 'KeyJ':
                console.log('J pressed');
                for (let i = 0; i < this.yellowArmy.length; i++){
                    if (this.yellowArmy[i].isSelected) {
                        if (this.yellowArmy[i].stamina < 5) {
                            break;
                        }
                        if ((this.yellowArmy[i].x - 100) < 0) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = ((this.yellowArmy[i].x - 100) / 100).toString() + (this.yellowArmy[i].y / 100).toString();
                        let friendlyFire;
                        this.yellowArmy.forEach((yellowsoldier) => {
                            if (yellowsoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        
                        let enemy;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                enemy = redsoldier;                                
                            }
                        });

                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                enemy = bluesoldier;                                
                            }
                        });
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.yellowArmy[i].stamina = 0;
                            this.fight(this.yellowArmy[i], enemy);
                        } else {
                        console.log(`Unit on square ${this.yellowArmy[i].gps} moves left to ${futurePosition}`);
                        this.yellowArmy[i].facing = 'left';
                        this.yellowArmy[i].x -= 100;
                        this.yellowArmy[i].stamina = 0;
                        this.yellowArmy[i].gps = (this.yellowArmy[i].x / 100).toString() + (this.yellowArmy[i].y / 100).toString();
                        this.baseArray.forEach((base) => {
                            if (base.gps === futurePosition) {
                                base.faction = 'yellow';
                            }
                        });
                }
            }
        }
                break;

            case 'KeyI':
                console.log('I pressed');
                for (let i = 0; i < this.yellowArmy.length; i++){
                    if (this.yellowArmy[i].isSelected) {
                        if (this.yellowArmy[i].stamina < 5) {
                            break;
                        }
                        if ((this.yellowArmy[i].y - 100) < 0) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = (this.yellowArmy[i].x / 100).toString() + ((this.yellowArmy[i].y - 100) / 100).toString();
                        let friendlyFire;
                        this.yellowArmy.forEach((yellowsoldier) => {
                            if (yellowsoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        
                        let enemy;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                enemy = redsoldier;                                
                            }
                        });

                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                enemy = bluesoldier;                                
                            }
                        });
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.yellowArmy[i].stamina = 0;
                            this.fight(this.yellowArmy[i], enemy);
                        } else {
                        console.log(`Unit on square ${this.yellowArmy[i].gps} moves up to ${futurePosition}`);
                        this.yellowArmy[i].y -= 100;
                        this.yellowArmy[i].stamina = 0;
                        this.yellowArmy[i].gps = (this.yellowArmy[i].x / 100).toString() + (this.yellowArmy[i].y / 100).toString()
                        this.baseArray.forEach((base) => {
                            if (base.gps === futurePosition) {
                                base.faction = 'yellow';
                            }
                        });
                }
            }
        }
                break;

            case 'KeyK':
                console.log('K pressed');
                for (let i = 0; i < this.yellowArmy.length; i++){
                    if (this.yellowArmy[i].isSelected) {
                        if (this.yellowArmy[i].stamina < 5) {
                            break;
                        }
                        if ((this.yellowArmy[i].y + 100) > 700) {
                            console.log(`Can't move outside the battlefield`)
                            break;
                        }
                        let futurePosition = (this.yellowArmy[i].x / 100).toString() + ((this.yellowArmy[i].y + 100) / 100).toString();
                        let friendlyFire;
                        this.yellowArmy.forEach((yellowsoldier) => {
                            if (yellowsoldier.gps === futurePosition) {
                                friendlyFire = true;                                
                            }
                        });
                        
                        let enemy;
                        this.redArmy.forEach((redsoldier) => {
                            if (redsoldier.gps === futurePosition) {
                                enemy = redsoldier;                                
                            }
                        });

                        this.blueArmy.forEach((bluesoldier) => {
                            if (bluesoldier.gps === futurePosition) {
                                enemy = bluesoldier;                                
                            }
                        });
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
                            this.yellowArmy[i].stamina = 0;
                            this.fight(this.yellowArmy[i], enemy);
                        } else {
                        console.log(`Unit on square ${this.yellowArmy[i].gps} moves down to ${futurePosition}`);
                        this.yellowArmy[i].y += 100;
                        this.yellowArmy[i].stamina = 0;
                        this.yellowArmy[i].gps = (this.yellowArmy[i].x / 100).toString() + (this.yellowArmy[i].y / 100).toString()
                        this.baseArray.forEach((base) => {
                            if (base.gps === futurePosition) {
                                base.faction = 'yellow';
                            }
                        });
                }
            }
        }
                break;
          }
          });
        }
    
    fight(attacker, defender){
        let attackerStrength = attacker.hp;
        let defenderStrength = defender.hp;
        //calculate battle results, units deal twice/half dmg depending on unit types (rock / paper / scissor)
        if (attacker.type === 1) {
            switch (defender.type) {
                case 1:
                    attacker.hp -= defenderStrength;
                    defender.hp -= attackerStrength;
                    break;
                case 2:
                    attacker.hp -= defenderStrength/2;
                    defender.hp -= attackerStrength*2;
                    break;
                case 3:
                    attacker.hp -= defenderStrength*2;
                    defender.hp -= attackerStrength/2;
                    break; 
            }
        }
        else if (attacker.type === 2) {
            switch (defender.type) {
                case 1:
                    attacker.hp -= defenderStrength*2;
                    defender.hp -= attackerStrength/2;
                    break;
                case 2:
                    attacker.hp -= defenderStrength;
                    defender.hp -= attackerStrength;
                    break;
                case 3:
                    attacker.hp -= defenderStrength/2;
                    defender.hp -= attackerStrength*2;
                    break; 
            }
        }
        else if (attacker.type === 3) {
            switch (defender.type) {
                case 1:
                    attacker.hp -= defenderStrength/2;
                    defender.hp -= attackerStrength*2;
                    break;
                case 2:
                    attacker.hp -= defenderStrength*2;
                    defender.hp -= attackerStrength/2;
                    break;
                case 3:
                    attacker.hp -= defenderStrength;
                    defender.hp -= attackerStrength;
                    break; 
            }
        }

        //removes units with less than 0.5 HP
        this.blueArmy.forEach((bluesoldier) => {
            let index;
            if (bluesoldier.hp < 1) {
                console.log('Blue unit killed!');
                index = this.blueArmy.indexOf(bluesoldier);
                this.blueArmy.splice(index, 1);
                if (this.blueArmy.length > 0) {
                    let nextUnit = (index+1) % this.blueArmy.length;
                    this.blueArmy[nextUnit].isSelected = true;
                }
            }
        });

        this.redArmy.forEach((redsoldier) => {
            let index;
            if (redsoldier.hp < 1) {
                console.log('Red unit killed!');
                index = this.redArmy.indexOf(redsoldier);
                this.redArmy.splice(index, 1);
                if (this.redArmy.length > 0) {
                    let nextUnit = (index+1) % this.redArmy.length;
                    this.redArmy[nextUnit].isSelected = true;
                } 
            }
        });
        
        this.yellowArmy.forEach((yellowsoldier) => {
            let index;
            if (yellowsoldier.hp < 1) {
                console.log('Red unit killed!');
                index = this.yellowArmy.indexOf(yellowsoldier);
                this.yellowArmy.splice(index, 1);
                if (this.yellowArmy.length > 0) {
                    let nextUnit = (index+1) % this.yellowArmy.length;
                    this.yellowArmy[nextUnit].isSelected = true;
                } 
            }
        });  




    }
    
}
    


  
  
