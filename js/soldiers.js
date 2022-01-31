class Soldiers {
    constructor(game, type, x, y, width, height, gps, hp, facing, isSelected) {
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
        this.img = new Image();
        this.canvas;
    }

    draw() {
        if (this.type === 1 && this.faction === 'blue') {
            this.img.src = './images/bspear.png';
        }
        else if (this.type === 1 && this.faction === 'red') {
            this.img.src = './images/rspear.png';
        }
        else if (this.type === 2 && this.faction === 'blue') {
            if (this.direction === 'right') {
                this.img.src = './images/bhorseright.png';
            } else {this.img.src = './images/bhorseleft.png';}
                    }
        else if (this.type === 2 && this.faction === 'red') {
            this.img.src = './images/rhorseleft.png';
        }
        else if (this.type === 3 && this.faction === 'blue') {
            this.img.src = './images/bbowright.png';
        }
        else if (this.type === 3 && this.faction === 'red') {
            this.img.src = './images/rbowleft.png';
        }
        this.game.ctx.drawImage(this.img, this.x, this.y, 90, 90);
    }
    
}

class BlueSoldier extends Soldiers {
    constructor(game, faction, type, x, y, width, height, gps, hp, facing, isSelected) {
        super(game, type, x, y, width, height, gps, hp, facing);
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
    constructor(game, faction, type, x, y, width, height, gps, hp, facing) {
        super(game, type, x, y, width, height, gps, hp, facing);
        this.faction = faction;
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