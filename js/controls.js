class Controls {
    constructor(game) {
      this.game = game;
      this.blueArmy = this.game.blueArmy;
      this.redArmy = this.game.redArmy;
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
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
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
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
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
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
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
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
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

            case 'ArrowLeft':
                console.log('Left arrow pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        if (this.redArmy[i].stamina < 5) {
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

            case 'ArrowUp':
                console.log('Up arrow pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        if (this.redArmy[i].stamina < 5) {
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
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
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

            case 'ArrowDown':
                console.log('Down arrow pressed');
                for (let i = 0; i < this.redArmy.length; i++){
                    if (this.redArmy[i].isSelected) {
                        if (this.redArmy[i].stamina < 5) {
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
                        if (friendlyFire === true) {
                            console.log('Cannot move there');
                        } else if (enemy) {
                            console.log('Fight!');
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
          }
          });
        }
    
    fight(attacker, defender){
        let fightResult = 0;
        let attackerHP = 0;
        let defenderHP = 0;
        //calculate battle results, units deal twice/half dmg depending on who attacks/defends
        if (attacker.type === 1) {
            switch (defender.type) {
                case 1:
                    fightResult = attacker.hp - defender.hp;
                    attackerHP = attacker.hp - defender.hp;
                    defenderHP = defender.hp - attacker.hp;
                    attacker.hp = attackerHP;
                    defender.hp = defenderHP;
                    break;
                case 2:
                    fightResult = (attacker.hp*2) - defender.hp;
                    attackerHP = (attacker.hp*2) - defender.hp;
                    defenderHP = defender.hp - (attacker.hp*2);
                    attacker.hp = attackerHP;
                    defender.hp = defenderHP;
                    break;
                case 3:
                    fightResult = (attacker.hp/2) - defender.hp;
                    attackerHP = (attacker.hp/2) - defender.hp;
                    defenderHP = defender.hp - (attacker.hp/2);
                    attacker.hp = attackerHP;
                    defender.hp = defenderHP;
                    break; 
            }
        }
        else if (attacker.type === 2) {
            switch (defender.type) {
                case 1:
                    fightResult = (attacker.hp/2) - defender.hp;
                    attackerHP = (attacker.hp/2) - defender.hp;
                    defenderHP = defender.hp - (attacker.hp/2);
                    attacker.hp = attackerHP;
                    defender.hp = defenderHP;
                    break;
                case 2:
                    fightResult = attacker.hp - defender.hp;
                    attackerHP = attacker.hp - defender.hp;
                    defenderHP = defender.hp - attacker.hp;
                    attacker.hp = attackerHP;
                    defender.hp = defenderHP;
                    break;
                case 3:
                    fightResult = (attacker.hp*2) - defender.hp;
                    attackerHP = (attacker.hp*2) - defender.hp;
                    defenderHP = defender.hp - (attacker.hp*2);
                    attacker.hp = attackerHP;
                    defender.hp = defenderHP;
                    break; 
            }
        }
        else {
            switch (defender.type) {
                case 1:
                    fightResult = (attacker.hp*2) - defender.hp;
                    attackerHP = (attacker.hp*2) - defender.hp;
                    defenderHP = defender.hp - (attacker.hp*2);
                    attacker.hp = attackerHP;
                    defender.hp = defenderHP;
                    break;
                case 2:
                    fightResult = (attacker.hp/2) - defender.hp;
                    attackerHP = (attacker.hp/2) - defender.hp;
                    defenderHP = defender.hp - (attacker.hp/2);
                    attacker.hp = attackerHP;
                    defender.hp = defenderHP;
                    break;
                case 3:
                    fightResult = attacker.hp - defender.hp;
                    attackerHP = attacker.hp - defender.hp;
                    defenderHP = defender.hp - attacker.hp;
                    attacker.hp = attackerHP;
                    defender.hp = defenderHP;
                    break; 
            }
        }

        if (fightResult > 0) {
            console.log('Attacker wins!');
            if (attacker.faction === 'blue') {
                let index = this.redArmy.indexOf(defender);
                this.redArmy.splice(index, 1);
                let nextUnit = (index+1) % this.redArmy.length;
                this.redArmy[nextUnit].isSelected = true;
            }
            else if (attacker.faction === 'red') {
                let index = this.blueArmy.indexOf(defender);
                this.blueArmy.splice(index, 1);
                let nextUnit = (index+1) % this.blueArmy.length;
                this.blueArmy[nextUnit].isSelected = true;
            }
        }
        else if (fightResult < 0) {
            console.log('Defender wins!');
            if (attacker.faction === 'red') {
                let index = this.redArmy.indexOf(attacker);
                this.redArmy.splice(index, 1);
                let nextUnit = (index+1) % this.redArmy.length;
                this.redArmy[nextUnit].isSelected = true;
            }
            else if (attacker.faction === 'blue') {
                let index = this.blueArmy.indexOf(attacker);
                this.blueArmy.splice(index, 1);
                let nextUnit = (index+1) % this.blueArmy.length;
                this.blueArmy[nextUnit].isSelected = true;
            }

        }
        else if (fightResult > 0 && fightResult < 1) {
            console.log('Units destroyed each other...');
            if (attacker.faction === 'red') {
                let index = this.redArmy.indexOf(attacker);
                this.redArmy.splice(index, 1);
                let nextUnit = (index+1) % this.redArmy.length;
                this.redArmy[nextUnit].isSelected = true;
                index = this.blueArmy.indexOf(defender);
                this.blueArmy.splice(index, 1);
                let nextUnit2 = (index+1) % this.blueArmy.length;
                this.blueArmy[nextUnit2].isSelected = true;
            }
            else if (attacker.faction === 'blue') {
                let index = this.blueArmy.indexOf(attacker);
                this.blueArmy.splice(index, 1);
                let nextUnit = (index+1) % this.blueArmy.length;
                this.blueArmy[nextUnit].isSelected = true;
                index = this.redArmy.indexOf(defender);
                this.redArmy.splice(index, 1);
                let nextUnit2 = (index+1) % this.redArmy.length;
                this.redArmy[nextUnit2].isSelected = true;
            }

        }
        

        if (attacker.hp < 1) {
            switch (attacker.faction) {
                case 'blue':
                    let index = this.blueArmy.indexOf(attacker);
                    this.blueArmy.splice(index, 1);
                    let nextUnit = (index+1) % this.blueArmy.length;
                    this.blueArmy[nextUnit].isSelected = true;
            }
        }
        




    }
    
}
    


  
  
