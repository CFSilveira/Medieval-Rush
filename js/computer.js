class Computer {
    constructor(game) {
      this.game = game;
      this.blueArmy = this.game.blueArmy;
      this.redArmy = this.game.redArmy;
      this.baseArray = this.game.baseArray;      
    }

/*     aiDecisions() {
        let leftChance = Math.floor(Math.random() * 10) + 1;
        let rightChance = Math.floor(Math.random() * 10) + 1;
        let upChance = Math.floor(Math.random() * 10) + 1;
        let downChance = Math.floor(Math.random() * 10) + 1;
        let computerDecision = '';

        if (leftChance > rightChance) {
            if (leftChance > upChance) {
                if (leftChance > downChance) {
                    computerDecision = 'left';
                }
            }
        } else if (rightChance > upChance) {
            if (rightChance > downChance) {
                computerDecision = 'right';
            }
        } else if (upChance > downChance ) {
            computerDecision = 'up';
        } else {
            computerDecision = 'down';
        }

        return computerDecision
        } */

                /*      let decisionArray = [];
        let leftChance = {value: Math.floor(Math.random() * 10) + 1, direction: 1};
        decisionArray.unshift(leftChance);
        let rightChance = {value: Math.floor(Math.random() * 10) + 1, direction: 2};
        decisionArray.push(rightChance);
        let upChance = {value: Math.floor(Math.random() * 10) + 1, direction: 3};
        decisionArray.push(upChance);
        let downChance = {value: Math.floor(Math.random() * 10) + 1, direction: 4};
        decisionArray.push(downChance); */ 


    badAi() {
        for (let i = 0; i < this.redArmy.length; i++){       
            if (this.redArmy[i].isSelected && this.redArmy[i].stamina >= 5) {

                //function should be called here

                //calculates random chance
                let leftChance = Math.floor(Math.random() * 10) + 1;
                //increases the chance depending on values
                this.baseArray.forEach((base) => {
                    if (base.faction === 'blue' && base.x < this.redArmy[i].x) {
                        leftChance += 2;
                    } else if (base.faction === 'neutral' && base.x < this.redArmy[i].x) {
                        leftChance += 7;
                    }
                });
                this.blueArmy.forEach((soldier) => {
                    if (soldier.faction === 'blue' && soldier.x < this.redArmy[i].x) {
                        leftChance += 1;
                        if (soldier.hp < this.redArmy[i].hp) {
                            leftChance += 1;
                        }
                        if (soldier.hp < 5) {
                            leftChance += 2;
                        }
                    }                    
                });

                let futurePosition = ((this.redArmy[i].x - 100) / 100).toString() + (this.redArmy[i].y / 100).toString();
                let friendlyFire;
                    this.redArmy.forEach((redsoldier) => {
                        if (redsoldier.gps === futurePosition) {
                            friendlyFire = true;
                            leftChance -= 30;
                        }
                    });

                //right direction
                let rightChance = Math.floor(Math.random() * 10) + 1;
                this.baseArray.forEach((base) => {
                    if (base.faction === 'blue' && base.x > this.redArmy[i].x) {
                        rightChance += 2;
                    } else if (base.faction === 'neutral' && base.x > this.redArmy[i].x) {
                        rightChance += 7;
                    }
                });
                this.blueArmy.forEach((soldier) => {
                    if (soldier.faction === 'blue' && soldier.x > this.redArmy[i].x) {
                        rightChance += 1;
                        if (soldier.hp < this.redArmy[i].hp) {
                            rightChance += 1;
                        }
                        if (soldier.hp < 5) {
                            rightChance += 2;
                        }
                    }                    
                });

                    futurePosition = ((this.redArmy[i].x + 100) / 100).toString() + (this.redArmy[i].y / 100).toString();
                    friendlyFire = '';
                    this.redArmy.forEach((redsoldier) => {
                        if (redsoldier.gps === futurePosition) {
                            friendlyFire = true;
                            rightChance -= 30;
                        }
                    });


                let upChance = Math.floor(Math.random() * 10) + 1;
                this.baseArray.forEach((base) => {
                    if (base.faction === 'blue' && base.y < this.redArmy[i].y) {
                        upChance += 2;
                    } else if (base.faction === 'neutral' && base.y < this.redArmy[i].y) {
                        upChance += 7;
                    }
                });
                this.blueArmy.forEach((soldier) => {
                    if (soldier.faction === 'blue' && soldier.y < this.redArmy[i].y) {
                        upChance += 1;
                        if (soldier.hp < this.redArmy[i].hp) {
                            upChance += 1;
                        }
                        if (soldier.hp < 5) {
                            upChance += 2;
                        }
                    }                    
                });

                futurePosition = ((this.redArmy[i].x) / 100).toString() + (this.redArmy[i].y - 100/ 100).toString();
                    friendlyFire = '';
                    this.redArmy.forEach((redsoldier) => {
                        if (redsoldier.gps === futurePosition) {
                            friendlyFire = true;
                            upChance -= 30;
                        }
                    });


                let downChance = Math.floor(Math.random() * 10) + 1;
                this.baseArray.forEach((base) => {
                    if (base.faction === 'blue' && base.y > this.redArmy[i].y) {
                        downChance += 2;
                    } else if (base.faction === 'neutral' && base.y > this.redArmy[i].y) {
                        downChance += 7;
                    }
                });
                this.blueArmy.forEach((soldier) => {
                    if (soldier.faction === 'blue' && soldier.y > this.redArmy[i].y) {
                        downChance += 1;
                        if (soldier.hp < this.redArmy[i].hp) {
                            downChance += 1;
                        }
                        if (soldier.hp < 5) {
                            downChance += 2;
                        }
                    }                    
                });

                futurePosition = ((this.redArmy[i].x) / 100).toString() + (this.redArmy[i].y + 100/ 100).toString();
                friendlyFire = '';
                this.redArmy.forEach((redsoldier) => {
                    if (redsoldier.gps === futurePosition) {
                        friendlyFire = true;
                        downChance -= 30;
                    }
                });

                //checks what direction won
                let computerDecision = '';
        
                if (leftChance > rightChance) {
                    if (leftChance > upChance) {
                        if (leftChance > downChance) {
                            computerDecision = 'left';
                        }
                    }
                } else if (rightChance > upChance) {
                    if (rightChance > downChance) {
                        computerDecision = 'right';
                    }
                } else if (upChance > downChance ) {
                    computerDecision = 'up';
                } else {
                    computerDecision = 'down';
                }
                
                //computer makes the move    
                if (computerDecision === "right") {
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

                    if (friendlyFire === true) {
                        console.log('Cannot move there');
                    } else if (enemy) {
                        console.log('Fight!');
                        this.redArmy[i].stamina = 0;
                        this.redArmy[i].facing = 'right';
                        this.fight(this.redArmy[i], enemy);
                    } else {
                    console.log(`Unit on ${this.redArmy[i].gps} moved right to ${futurePosition}`);
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
                    this.redArmy[i].isSelected = false;
                    let nextUnit = (i+1) % this.blueArmy.length;
                    this.redArmy[nextUnit].isSelected = true;
                    //break;

                } else if (computerDecision === "left") {
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

                    if (friendlyFire === true) {
                        console.log('Cannot move there');
                    } else if (enemy) {
                        console.log('Fight!');
                        this.redArmy[i].stamina = 0;
                        this.redArmy[i].facing = 'left';
                        this.fight(this.redArmy[i], enemy);
                    } else {
                    console.log(`Unit on ${this.redArmy[i].gps} moved left to ${futurePosition}`);
                    this.redArmy[i].facing = 'left';
                    this.redArmy[i].x -= 100;
                    this.redArmy[i].stamina = 0;
                    this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString();
                    this.baseArray.forEach((base) => {
                        if (base.gps === futurePosition) {
                            console.log('captured base')
                            base.faction = 'red';
                        }
                    });
                    }
                    this.redArmy[i].isSelected = false;
                    let nextUnit = (i+1) % this.redArmy.length;
                    this.redArmy[nextUnit].isSelected = true;
                    //break;

                } else if (computerDecision === "up") {
                    if ((this.redArmy[i].y - 100) < 0) {
                        console.log(`Can't move outside the battlefield`)
                        break;
                    }

                    let futurePosition = ((this.redArmy[i].x) / 100).toString() + (this.redArmy[i].y - 100/ 100).toString();
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

                    if (friendlyFire === true) {
                        console.log('Cannot move there');
                    } else if (enemy) {
                        console.log('Fight!');
                        this.redArmy[i].stamina = 0;
                        this.fight(this.redArmy[i], enemy);
                    } else {
                    console.log(`Unit on ${this.redArmy[i].gps} moved up to ${futurePosition}`);
                    this.redArmy[i].y -= 100;
                    this.redArmy[i].stamina = 0;
                    this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString();
                    this.baseArray.forEach((base) => {
                        if (base.gps === futurePosition) {
                            base.faction = 'red';
                        }
                    });
                }
                    this.redArmy[i].isSelected = false;
                    let nextUnit = (i+1) % this.blueArmy.length;
                    this.redArmy[nextUnit].isSelected = true;

                } else if (computerDecision === "down") {
                    if ((this.redArmy[i].y + 100) > 700) {
                        console.log(`Can't move outside the battlefield`)
                        break;
                    }

                    let futurePosition = ((this.redArmy[i].x) / 100).toString() + (this.redArmy[i].y + 100/ 100).toString();
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

                    if (friendlyFire === true) {
                        console.log('Cannot move there');
                    } else if (enemy) {
                        console.log('Fight!');
                        this.redArmy[i].stamina = 0;
                        this.fight(this.redArmy[i], enemy);
                    } else {
                    console.log(`Unit on ${this.redArmy[i].gps} moved down to ${futurePosition}`);
                    this.redArmy[i].y += 100;
                    this.redArmy[i].stamina = 0;
                    this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString();
                    this.baseArray.forEach((base) => {
                        if (base.gps === futurePosition) {
                            base.faction = 'red';
                        }
                    });
                }
                    this.redArmy[i].isSelected = false;
                    let nextUnit = (i+1) % this.blueArmy.length;
                    this.redArmy[nextUnit].isSelected = true;

                }

                


                function fight(attacker, defender){
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
            
            
            
            
                }
                
    
                
    
            }
        }
    
    };

}


