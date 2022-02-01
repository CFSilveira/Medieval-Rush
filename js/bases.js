class Bases {
    constructor(game, faction, x, y, width, height, gps, production) {
        this.game = game;
        this.faction = faction;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gps = gps;
        this.production = production;
        this.img = new Image ();
        this.canvas;
    }

    draw() {
        if (this.faction === 'blue') {
            this.img.src = './images/bluebase.png';
        }
        else if (this.faction === 'red') {
            this.img.src = './images/redbase.png';
        }
        else if (this.faction === 'neutral') {
            this.img.src = './images/neutralbase.png';
        }
        this.game.ctx.drawImage(this.img, this.x, this.y, 100, 100);
    }
}