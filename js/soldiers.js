class Soldiers {
    constructor(game, faction, type, x, y, width, height, gps) {
        this.game = game;
        this.faction = faction;
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gps = gps
        this.img = new Image();
        this.canvas;
    }

    draw() {
        if (this.type === 1) {
            this.img.src = './images/bow2.png';
        }
        else if (this.type === 2) {
            this.img.src = './images/knight2.png';
        }
        else if (this.type === 3) {
            this.img.src = './images/spear2.png';
        }
        this.game.ctx.drawImage(this.img, this.x, this.y, 90, 90);
    }
    
}