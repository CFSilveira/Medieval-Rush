const blueArmy = [];

function draw() {
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

