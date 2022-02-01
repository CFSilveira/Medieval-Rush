class Soldiers {
    constructor(game, type, x, y, width, height, gps, hp, facing, isSelected, stamina) {
        this.game = game;
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gps = gps;
        this.hp = hp;
        this.facing = facing;
        this.isSelected = isSelected;
        this.stamina = stamina;
        this.img = new Image();
        this.square = new Image();
        this.staminaFrame = new Image();
        this.canvas;
    }

    draw() {
        //spear color selection
        if (this.type === 1 && this.faction === 'blue') {
            this.img.src = './images/bspear.png';
        }
        else if (this.type === 1 && this.faction === 'red') {
            this.img.src = './images/rspear.png';
        }
        //horse rotation
        else if (this.type === 2 && this.faction === 'blue') {
            if (this.facing === 'right') {
                this.img.src = './images/bhorseright.png';
            } else {this.img.src = './images/bhorseleft.png';}
                    }

        else if (this.type === 2 && this.faction === 'red') {
            if (this.facing === 'right') {
            this.img.src = './images/rhorseright.png';
        } else {this.img.src = './images/rhorseleft.png';}
    }
        //bow rotation
        else if (this.type === 3 && this.faction === 'blue') {
            if (this.facing === 'right') {
                this.img.src = './images/bbowright.png';
            } else {this.img.src = './images/bbowleft.png'}
        }

        else if (this.type === 3 && this.faction === 'red') {
            if (this.facing === 'right') {
                this.img.src = './images/rbowright.png';
            } else {this.img.src = './images/rbowleft.png';}
        }
        this.game.ctx.drawImage(this.img, this.x, this.y, 90, 90);

    }

    drawSquare() {
        //draws a square around the selected unit
        if (this.faction === 'blue') {
            this.square.src = './images/bsquare.png';
        }
        else if (this.faction === 'red') {
            this.square.src = './images/rsquare.png';
        }        

        this.game.ctx.drawImage(this.square, this.x, this.y, 100, 100);
    }

    drawStamina() {
        //draws a hint that a unit is ready to be moved
        if (this.stamina >= 5) {
            this.staminaFrame.src = './images/staminag.png';            
        }
        else if (this.stamina > 2) {
            this.staminaFrame.src = './images/staminay.png';
        }
        else if (this.stamina < 2) {
            this.staminaFrame.src = './images/staminar.png';
        }

        this.game.ctx.drawImage(this.staminaFrame, this.x, this.y, 100, 100);
    }
    
}

class BlueSoldier extends Soldiers {
    constructor(game, faction, type, x, y, width, height, gps, hp, facing, isSelected, stamina) {
        super(game, type, x, y, width, height, gps, hp, facing, isSelected, stamina);
        this.faction = 'blue';
    }

    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
          switch (e.code) {
            case 'KeyD':
                this.BlueSoldier.x += 100;
                break;
            case 'KeyA':
                this.BlueSoldier.x -= 100;
                break;
            case 'KeyW':
                this.BlueSoldier.y += 100;
                break;
            case 'KeyS':
                this.BlueSoldier.y -= 100;
                break;
            }
        });
      }
}

class RedSoldier extends Soldiers {
    constructor(game, faction, type, x, y, width, height, gps, hp, facing, isSelected, stamina) {
        super(game, type, x, y, width, height, gps, hp, facing, isSelected, stamina);
        this.faction = 'red';
    }

    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
          switch (e.code) {
            case 'ArrowRight':
                this.RedSoldier.x += 100;
                break;
            case 'ArrowLeft':
                this.RedSoldier.x -= 100;
                break;
            case 'ArrowUp':
                this.RedSoldier.y += 100;
                break;
            case 'ArrowDown':
                this.RedSoldier.y -= 100;
                break;
            }
        });
      }
}