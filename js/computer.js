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
                this.baseArray.foreach((base) => {
                    if (base.faction === 'blue' && base.x < this.redArmy[i].x) {
                        leftChance += 2;
                    } else if (base.faction === 'neutral' && base.x < this.redArmy[i].x) {
                        leftChance += 5;
                    }
                });
                this.blueArmy.foreach((soldier) => {
                    if (soldier.faction === 'blue' && base.x < this.redArmy[i].x) {
                        leftChance += 1;
                        if (soldier.hp < this.redArmy[i].hp) {
                            leftChance += 1;
                        }
                        if (soldier.hp < 5) {
                            leftChance += 2;
                        }
                    }                    
                });

                
                let rightChance = Math.floor(Math.random() * 10) + 1;
                this.baseArray.foreach((base) => {
                    if (base.faction === 'blue' && base.x > this.redArmy[i].x) {
                        rightChance += 2;
                    } else if (base.faction === 'neutral' && base.x > this.redArmy[i].x) {
                        rightChance += 5;
                    }
                });
                this.blueArmy.foreach((soldier) => {
                    if (soldier.faction === 'blue' && base.x > this.redArmy[i].x) {
                        rightChance += 1;
                        if (soldier.hp < this.redArmy[i].hp) {
                            rightChance += 1;
                        }
                        if (soldier.hp < 5) {
                            rightChance += 2;
                        }
                    }                    
                });


                let upChance = Math.floor(Math.random() * 10) + 1;
                this.baseArray.foreach((base) => {
                    if (base.faction === 'blue' && base.y < this.redArmy[i].y) {
                        upChance += 2;
                    } else if (base.faction === 'neutral' && base.y < this.redArmy[i].y) {
                        upChance += 5;
                    }
                });
                this.blueArmy.foreach((soldier) => {
                    if (soldier.faction === 'blue' && base.y < this.redArmy[i].y) {
                        upChance += 1;
                        if (soldier.hp < this.redArmy[i].hp) {
                            upChance += 1;
                        }
                        if (soldier.hp < 5) {
                            upChance += 2;
                        }
                    }                    
                });


                let downChance = Math.floor(Math.random() * 10) + 1;
                this.baseArray.foreach((base) => {
                    if (base.faction === 'blue' && base.y > this.redArmy[i].y) {
                        downChance += 2;
                    } else if (base.faction === 'neutral' && base.y > this.redArmy[i].y) {
                        downChance += 5;
                    }
                });
                this.blueArmy.foreach((soldier) => {
                    if (soldier.faction === 'blue' && base.y > this.redArmy[i].y) {
                        downChance += 1;
                        if (soldier.hp < this.redArmy[i].hp) {
                            downChance += 1;
                        }
                        if (soldier.hp < 5) {
                            downChance += 2;
                        }
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
                    this.redArmy[i].x += 100;
                    this.redArmy[i].stamina = 0;
                    this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString();
                    console.log('Unit moved right');
                    this.redArmy[i].isSelected = false;
                    let nextUnit = (i+1) % this.blueArmy.length;
                    this.redArmy[nextUnit].isSelected = true;
                    break;
                } else if (computerDecision === "left") {
                    this.redArmy[i].x -= 100;
                    this.redArmy[i].stamina = 0;
                    this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString();
                    console.log('Unit moved left');
                    this.redArmy[i].isSelected = false;
                    let nextUnit = (i+1) % this.redArmy.length;
                    this.redArmy[nextUnit].isSelected = true;
                    break;
                } else if (computerDecision === "up") {
                    this.redArmy[i].y -= 100;
                    this.redArmy[i].stamina = 0;
                    this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString();
                    console.log('Unit moved up');
                    this.redArmy[i].isSelected = false;
                    let nextUnit = (i+1) % this.redArmy.length;
                    this.redArmy[nextUnit].isSelected = true;
                    break;
                } else if (computerDecision === "down") {
                    this.redArmy[i].y += 100;
                    this.redArmy[i].stamina = 0;
                    this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString();
                    console.log('Unit moved down');
                    this.redArmy[i].isSelected = false;
                    let nextUnit = (i+1) % this.redArmy.length;
                    this.redArmy[nextUnit].isSelected = true;
                    break;
                }
                
    
                
    
            }
        }
    
    };

}


