class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.background = new Image();
        this.frames = 0;
        this.x = 0;
        this.y = 0;
        this.canvasWidth = 1200;
        this.canvasHeight = 800;
        this.intervalId = null;
        this.blueArmy = [];
        this.redArmy = [];
        this.yellowArmy = [];
        this.baseArray = [];
        this.stamina = 0;
        this.production = 0;
    }

    startAi() {
        this.intervalId = setInterval(() => {
            this.updateAi();
         }, 1000 / 60);

    }

    startThree() {
        //things that trigger only once
        
        //random creation and positioning of blue units
        for (let i = 1 ; i <= 4; i++) {
            let xAxis = Math.floor(Math.random() * 4);
            let yAxis = Math.floor(Math.random() * 4);
            let typeOfSoldier = Math.floor(Math.random() * 3) + 1;
            let gps = xAxis.toString() + yAxis.toString()
            xAxis = xAxis * 100;
            yAxis = yAxis * 100;
            let stamina = 5;
            if (i < 4) {
                this.soldiers = new BlueSoldier(this, 'blue', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'right', false, stamina);
            }
            else {
                this.soldiers = new BlueSoldier(this, 'blue', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'right', true, stamina);
            }
            let newSoldier = this.soldiers;
            //checking if there is another soldier on that square
            this.blueArmy.push(newSoldier);
            for (let j = 0; j < this.blueArmy.length - 1; j++) {
                if (gps === this.blueArmy[j].gps) {
                console.log(`There is a unit already on position ${gps}. Duplicate removed!`);
                i--;
                this.blueArmy.pop();
                }
            }

            
        }
        console.log(`Blue Army: `, this.blueArmy);

        //random creation and positioning of red units
        for (let i = 1 ; i <= 4; i++) {
            let xAxis = Math.floor(Math.random() * 4) + 8;
            let yAxis = Math.floor(Math.random() * 4);
            let typeOfSoldier = Math.floor(Math.random() * 3) + 1;
            let gps = xAxis.toString() + yAxis.toString()
            xAxis = xAxis * 100;
            yAxis = yAxis * 100;
            let stamina = 5;
            if (i < 4) {
                this.soldiers = new RedSoldier(this, 'red', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'left', false, stamina);
            }
            else {
                this.soldiers = new RedSoldier(this, 'red', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'left', true, stamina);
            }
            let newSoldier = this.soldiers;
            //checking if there is another soldier on that square
            this.redArmy.push(newSoldier);
            for (let j = 0; j < this.redArmy.length - 1; j++) {
                if (gps === this.redArmy[j].gps) {
                console.log(`There is a unit already on position ${gps}. Duplicate removed!`);
                i--;
                this.redArmy.pop();
                }
            }
        }
        console.log(`Red Army: `, this.redArmy);

        //random creation and positioning of yellow units
        for (let i = 1 ; i <= 4; i++) {
            let xAxis = Math.floor(Math.random() * 4) + 4;
            let yAxis = Math.floor(Math.random() * 4) + 4;
            let typeOfSoldier = Math.floor(Math.random() * 3) + 1;
            let gps = xAxis.toString() + yAxis.toString()
            xAxis = xAxis * 100;
            yAxis = yAxis * 100;
            let stamina = 5;
            if (i < 4) {
                this.soldiers = new YellowSoldier(this, 'yellow', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'right', false, stamina);
            }
            else {
                this.soldiers = new YellowSoldier(this, 'yellow', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'right', true, stamina);
            }
            let newSoldier = this.soldiers;
            //checking if there is another soldier on that square
            this.yellowArmy.push(newSoldier);
            for (let j = 0; j < this.yellowArmy.length - 1; j++) {
                if (gps === this.yellowArmy[j].gps) {
                console.log(`There is a unit already on position ${gps}. Duplicate removed!`);
                i--;
                this.yellowArmy.pop();
                }
            }

            
        }
        console.log(`Yellow Army: `, this.yellowArmy);

        //random creation and positioning of bases - improved from the unit creation method
        for (let i = 1; i <= 9; i++) {
            let xAxis = Math.floor(Math.random() * 4);
            if (i >= 4) {xAxis = xAxis + 4};
            if (i >= 7) {xAxis = xAxis + 4};
            let yAxis = Math.floor(Math.random() * 4);
            if (i > 3 && i < 7) {yAxis = yAxis + 4};

            let gps = xAxis.toString() + yAxis.toString()
            xAxis = xAxis * 100;
            yAxis = yAxis * 100;
            if (i <= 3) {
                this.bases = new Bases(this, 'blue', xAxis, yAxis, 100, 100, gps, 0);
            }
            else if (i <= 6) {
                this.bases = new Bases(this, 'yellow', xAxis, yAxis, 100, 100, gps, 0);
            }
            else if (i > 6) {
                this.bases = new Bases(this, 'red', xAxis, yAxis, 100, 100, gps, 0);
            }
            let newBase = this.bases;
            //checking if there is another soldier on that square
            this.baseArray.push(newBase);
            for (let j = 0; j < this.baseArray.length - 1; j++) {
                if (gps === this.baseArray[j].gps) {
                console.log(`There is already a base on position ${gps}. Duplicate removed!`);
                i--;
                this.baseArray.pop();
                }
            }

        }
        console.log('Bases: ', this.baseArray);

        this.computer = new Computer(this);        

        const controls = new Controls(this);
        controls.keyboardEvents(); 
        this.intervalId = setInterval(() => {
           this.update();
        }, 1000 / 60);
    }

    start() {
        //things that trigger only once
        
        //random creation and positioning of blue units
        for (let i = 1 ; i <= 4; i++) {
            let xAxis = Math.floor(Math.random() * 5);
            let yAxis = Math.floor(Math.random() * 8);
            let typeOfSoldier = Math.floor(Math.random() * 3) + 1;
            let gps = xAxis.toString() + yAxis.toString()
            xAxis = xAxis * 100;
            yAxis = yAxis * 100;
            let stamina = 5;
            if (i < 4) {
                this.soldiers = new BlueSoldier(this, 'blue', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'right', false, stamina);
            }
            else {
                this.soldiers = new BlueSoldier(this, 'blue', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'right', true, stamina);
            }
            let newSoldier = this.soldiers;
            //checking if there is another soldier on that square
            this.blueArmy.push(newSoldier);
            for (let j = 0; j < this.blueArmy.length - 1; j++) {
                if (gps === this.blueArmy[j].gps) {
                console.log(`There is a unit already on position ${gps}. Duplicate removed!`);
                i--;
                this.blueArmy.pop();
                }
            }

            
        }
        console.log(`Blue Army: `, this.blueArmy);

        //random creation and positioning of red units
        for (let i = 1 ; i <= 4; i++) {
            let xAxis = Math.floor(Math.random() * 5) + 7;
            let yAxis = Math.floor(Math.random() * 8);
            let typeOfSoldier = Math.floor(Math.random() * 3) + 1;
            let gps = xAxis.toString() + yAxis.toString()
            xAxis = xAxis * 100;
            yAxis = yAxis * 100;
            let stamina = 5;
            if (i < 4) {
                this.soldiers = new RedSoldier(this, 'red', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'left', false, stamina);
            }
            else {
                this.soldiers = new RedSoldier(this, 'red', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'left', true, stamina);
            }
            let newSoldier = this.soldiers;
            //checking if there is another soldier on that square
            this.redArmy.push(newSoldier);
            for (let j = 0; j < this.redArmy.length - 1; j++) {
                if (gps === this.redArmy[j].gps) {
                console.log(`There is a unit already on position ${gps}. Duplicate removed!`);
                i--;
                this.redArmy.pop();
                }
            }
        }
        console.log(`Red Army: `, this.redArmy);

        //random creation and positioning of blue, neutral and red bases - improved the unit creation method
        for (let i = 1; i <= 6; i++) {
            let xAxis = Math.floor(Math.random() * 4);
            if (i >= 4) {xAxis = xAxis + 7};
            let yAxis = Math.floor(Math.random() * 6) + 1;
            let gps = xAxis.toString() + yAxis.toString()
            xAxis = xAxis * 100;
            yAxis = yAxis * 100;
            if (i <= 2) {
                this.bases = new Bases(this, 'blue', xAxis, yAxis, 100, 100, gps, 0);
            }
            else if (i === 3) {
                this.bases = new Bases(this, 'neutral', xAxis, yAxis, 100, 100, gps, 0);
            }
            else if (i === 4) {
                this.bases = new Bases(this, 'neutral', xAxis, yAxis, 100, 100, gps, 0);
            }
            else if (i > 4) {
                this.bases = new Bases(this, 'red', xAxis, yAxis, 100, 100, gps, 0);
            }
            let newBase = this.bases;
            //checking if there is another soldier on that square
            this.baseArray.push(newBase);
            for (let j = 0; j < this.baseArray.length - 1; j++) {
                if (gps === this.baseArray[j].gps) {
                console.log(`There is already a base on position ${gps}. Duplicate removed!`);
                i--;
                this.baseArray.pop();
                }
            }

        }
        console.log('Bases: ', this.baseArray);

        this.computer = new Computer(this);        

        const controls = new Controls(this);
        controls.keyboardEvents(); 
        this.intervalId = setInterval(() => {
           this.update();
        }, 1000 / 60);
    }

    update() {
        this.drawBackground();
        this.baseArray.forEach((base) => {
            base.draw()
        });
        
        this.staminaCounter();
        //this.regeneration();
        this.productionCounter();
        this.unitProduction();
        this.frames++;

        //draws a blue square around the selected unit
        this.blueArmy.forEach((bluesoldier) => {
            if (bluesoldier.isSelected) {
                bluesoldier.drawSquare();
            }
        });

        //draws all the blue units and stamina status
        this.blueArmy.forEach((bluesoldier) => {
            bluesoldier.draw();
            bluesoldier.drawStamina();            
        });

        //draws a red square around the selected unit
        this.redArmy.forEach((redsoldier) => {
            if (redsoldier.isSelected) {
                redsoldier.drawSquare();
            }
        });
        
        //draws all the red units and stamina status
        this.redArmy.forEach((redsoldier) => {
            redsoldier.draw();
            redsoldier.drawStamina();
        });

        //draws a blue square around the selected unit
        this.yellowArmy.forEach((YellowSoldier) => {
            if (YellowSoldier.isSelected) {
                YellowSoldier.drawSquare();
            }
        });

        //draws all the blue units and stamina status
        this.yellowArmy.forEach((YellowSoldier) => {
            YellowSoldier.draw();
            YellowSoldier.drawStamina();            
        });
        
        this.checkGameOver();
        //this.computer.badAi();        
    }

    updateAi (){
        this.refreshAi ()
    }


    drawBackground() {
        if (battlefield === 1) {
            this.background.src = './images/background.png'
            this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
        }
        else if (battlefield === 2) {
            this.background.src = './images/background2.png'
            this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
        }
        else if (battlefield === 3) {
            this.background.src = './images/background3.png'
            this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
        }
    }

    refreshAi () {
        if (this.frames % 60 === 0) {
            this.computer.badAi()
        }
        if (this.frames % 200 === 0) {
            this.computer.badAi()
        }
    }

    staminaCounter() {
        if (this.frames % 60 === 0) {
            this.blueArmy.forEach((bluesoldier) => {
                bluesoldier.stamina ++;
            });
            this.redArmy.forEach((redsoldier) => {
                redsoldier.stamina ++;
            });
            this.yellowArmy.forEach((YellowSoldier) => {
                YellowSoldier.stamina ++;
            });
               
            this.blueArmy.forEach((bluesoldier) => {
                if (bluesoldier.stamina > 12 && bluesoldier.hp < 10 && bluesoldier.hp > 0.4) {
                    bluesoldier.stamina = 5;
                    bluesoldier.hp = bluesoldier.hp + 1;
                    console.log(`Blue unit on position ${bluesoldier.gps} recovered 1 HP.`)
                }
            });

            this.redArmy.forEach((redsoldier) => {
                if (redsoldier.stamina > 12 && redsoldier.hp < 10 && redsoldier.hp > 0.4) {
                    redsoldier.stamina = 5;
                    redsoldier.hp = redsoldier.hp + 1;
                    console.log(`Blue unit on position ${redsoldier.gps} recovered 1 HP.`)
                }
            });

            this.yellowArmy.forEach((YellowSoldier) => {
                if (YellowSoldier.stamina > 10 && YellowSoldier.hp < 10 && YellowSoldier.hp > 0.4) {
                    YellowSoldier.stamina = 5;
                    YellowSoldier.hp = YellowSoldier.hp + 1;
                    console.log(`Blue unit on position ${YellowSoldier.gps} recovered 1 HP.`)
                }
            });
        }
    }

    productionCounter() {
        if (this.frames % 400 === 0) {
            this.baseArray.forEach((base) => {
                if (base.faction === 'neutral') {
                    base.production = 0;
                }
                else {
                    base.production ++;
                }
            });
            console.log(`Production increased on all bases`)
        }
    }

    unitProduction() {
        this.baseArray.forEach((base) => {
            if (base.production >= 4) {
                if (base.faction === 'blue') {
                    if (this.blueArmy.length < 6){
                        base.production = 0;
                        this.soldiers = new BlueSoldier(this, 'blue', Math.floor(Math.random() * 3) + 1, base.x, base.y, 100, 100, base.gps, 10, 'right', false, 3);
                        let newSoldier = this.soldiers;
                        this.blueArmy.push(newSoldier);
                        for (let j = 0; j < this.blueArmy.length - 1; j++) {
                            if (base.gps === this.blueArmy[j].gps) {
                            console.log(`Cannot create a new unit on position ${base.gps}!`);
                            this.blueArmy.pop();
                            }
                        }
                    } else {
                        base.production = 2;
                    }

                }
                else if (base.faction === 'red') {
                    if (this.redArmy.length < 6){
                        base.production = 0;
                        this.soldiers = new RedSoldier(this, 'red', Math.floor(Math.random() * 3) + 1, base.x, base.y, 100, 100, base.gps, 10, 'left', false, 3);
                        let newSoldier = this.soldiers;
                        this.redArmy.push(newSoldier);                        
                        for (let j = 0; j < this.redArmy.length - 1; j++) {
                            if (base.gps === this.redArmy[j].gps) {
                                console.log(`Cannot create a new unit on position ${base.gps}!`);
                                this.redArmy.pop();
                            }                    
                    }
                }  else {
                    base.production = 2;
                }
            }
            else if (base.faction === 'yellow') {
                if (this.yellowArmy.length < 7){
                    base.production = 0;
                    this.soldiers = new YellowSoldier(this, 'yellow', Math.floor(Math.random() * 3) + 1, base.x, base.y, 100, 100, base.gps, 10, 'left', false, 3);
                    let newSoldier = this.soldiers;
                    this.yellowArmy.push(newSoldier);                        
                    for (let j = 0; j < this.yellowArmy.length - 1; j++) {
                        if (base.gps === this.yellowArmy[j].gps) {
                            console.log(`Cannot create a new unit on position ${base.gps}!`);
                            this.yellowArmy.pop();
                        }                    
                }
            }  else {
                base.production = 2;
            }
        }
        } 
    });
}

    checkGameOver() {
        let redBases = 0;
        let blueBases = 0;
        let yellowBases = 0;
        let totalPlayers = 3;
        this.baseArray.forEach((base) => {
            if (base.faction === 'red') {
                redBases ++;
            }
            else if (base.faction === 'blue') {
                blueBases ++;
            }
            else if (base.faction === 'yellow') {
                yellowBases ++;
            }

        });

        if (this.blueArmy.length + blueBases === 0) {
            totalPlayers = totalPlayers - 1;
        }
        else if (this.redArmy.length + redBases === 0) {
            totalPlayers = totalPlayers - 1;
        }
        else if (this.yellowArmy.length + yellowBases === 0) {
            totalPlayers = totalPlayers - 1;
        }

        if (totalPlayers === 1) {
            console.log('GAME OVER');
            this.stop();
        }
    }
    

    stop() {
        clearInterval(this.intervalId);
      }

}