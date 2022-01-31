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
        this.fullArmy = [];
        this.blueArmy = [];
        this.redArmy = [];

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
            if (i < 4) {
                this.soldiers = new BlueSoldier(this, 'blue', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'right', false);
            }
            else {
                this.soldiers = new BlueSoldier(this, 'blue', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'right', true);
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
        this.fullArmy.push(this.blueArmy);
        console.log(`Blue Army: `, this.blueArmy);

        //random creation and positioning of red units
        for (let i = 1 ; i <= 4; i++) {
            let xAxis = Math.floor(Math.random() * 5) + 7;
            let yAxis = Math.floor(Math.random() * 8);
            let typeOfSoldier = Math.floor(Math.random() * 3) + 1;
            let gps = xAxis.toString() + yAxis.toString()
            xAxis = xAxis * 100;
            yAxis = yAxis * 100;
            if (i < 4) {
                this.soldiers = new RedSoldier(this, 'red', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'left', false);
            }
            else {
                this.soldiers = new RedSoldier(this, 'red', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'left', true);
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
        this.fullArmy.push(this.redArmy);
        console.log(`Red Army: `, this.redArmy);
        console.log(`Full Army: `, this.fullArmy);

        const controls = new Controls(this);
        controls.keyboardEvents();
        
        this.intervalId = setInterval(() => {
           this.update();
        }, 1000 / 60);
    }

    update() {
        this.drawBackground();

        //draws all the blue units
        this.blueArmy.forEach((bluesoldier) => {
            bluesoldier.draw();
        });

        //draws all the red units
        this.redArmy.forEach((redsoldier) => {
            redsoldier.draw();
        });
        

    }


    drawBackground() {
        this.background.src = './images/background.png'        
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }
}