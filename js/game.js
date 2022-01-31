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
    }

    start() {
        //things that trigger only once
        //random creation and positioning of blue units
        const fullArmy = [];
        const blueArmy = [];
        for (let i = 1 ; i <= 4; i++) {
            let xAxis = Math.floor(Math.random() * 8) + 1
            let yAxis = Math.floor(Math.random() * 5) + 1
            let typeOfSoldier = Math.floor(Math.random() * 3) + 1;
            let gps = xAxis.toString() + yAxis.toString()
            this.soldiers = new Soldiers(this, 'blue', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'right');
            let newSoldier = this.soldiers;
            //checking if there is another soldier on that square
            blueArmy.push(newSoldier);
            for (let j = 0; j < blueArmy.length - 1; j++) {
                if (gps === blueArmy[j].gps) {
                console.log(`There is a unit already on position ${gps}. Duplicate removed!`);
                i--;
                blueArmy.pop();
                }
            }

            
        }
        fullArmy.push(blueArmy);
        console.log(`Blue Army: `, blueArmy);
        console.log(`Full Army: `, fullArmy);

        //random creation and positioning of red units
        const redArmy = [];
        for (let i = 1 ; i <= 4; i++) {
            let xAxis = Math.floor(Math.random() * 8) + 1
            let yAxis = Math.floor(Math.random() * 5) + 6
            let typeOfSoldier = Math.floor(Math.random() * 3) + 1;
            let gps = xAxis.toString() + yAxis.toString()
            this.soldiers = new Soldiers(this, 'red', typeOfSoldier, xAxis, yAxis, 100, 100, gps, 10, 'left');
            let newSoldier = this.soldiers;
            //checking if there is another soldier on that square
            redArmy.push(newSoldier);
            for (let j = 0; j < redArmy.length - 1; j++) {
                if (gps === redArmy[j].gps) {
                console.log(`There is a unit already on position ${gps}. Duplicate removed!`);
                i--;
                redArmy.pop();
                }
            }
        }
        fullArmy.push(redArmy);
        console.log(`Red Army: `, redArmy);
        console.log(`Full Army: `, fullArmy);

        
        this.intervalId = setInterval(() => {
           this.update();
        }, 1000 / 60);
    }

    update() {
        this.drawBackground();

        this.blueArmy.array.forEach(element => {
            blueArmy.draw();
        });
        
/*         for (let i = 0 ; i < blueArmy.length; i++) {
            let blueToDraw = blueArmy[i];
            console.log(blueToDraw[i])
            let redToDraw = redArmy[i];
            console.log(redToDraw[i])
        } */
        

        //this.soldiers.draw();
        //unidadeAzul.draw();
    }


    drawBackground() {
        this.background.src = './images/background.png'        
        this.ctx.drawImage(this.background, this.x, this.y, this.canvasWidth, this.canvasHeight);
    }
}