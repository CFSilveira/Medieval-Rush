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
        this.baseArray = [];
        this.stamina = 0;
        this.production = 0;

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
        
        this.frames++;

        //draws all the blue units and stamina status
        this.blueArmy.forEach((bluesoldier) => {
            bluesoldier.draw();
            bluesoldier.drawStamina();            
        });
        

        //draws a blue square around the selected unit
        this.blueArmy.forEach((bluesoldier) => {
            if (bluesoldier.isSelected) {
                bluesoldier.drawSquare();
            }
        });

        //draws all the red units and stamina status
        this.redArmy.forEach((redsoldier) => {
            redsoldier.draw();
            redsoldier.drawStamina();
        });

        //draws a red square around the selected unit
        this.redArmy.forEach((redsoldier) => {
            if (redsoldier.isSelected) {
                redsoldier.drawSquare();
            }
        });
        

        this.staminaCounter();

    }


    drawBackground() {
        this.background.src = './images/background.png'        
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }

    staminaCounter() {
        if (this.frames % 75 === 0) {
            this.blueArmy.forEach((bluesoldier) => {
                bluesoldier.stamina ++
            });
            this.redArmy.forEach((redsoldier) => {
                redsoldier.stamina ++
            });
          console.log(this.stamina);
        }
    }
}