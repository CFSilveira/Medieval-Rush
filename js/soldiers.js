class Soldiers {
  constructor(
    game,
    type,
    x,
    y,
    width,
    height,
    gps,
    hp,
    facing,
    isSelected,
    stamina
  ) {
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
    if (this.type === 1 && this.faction === "blue") {
      this.img.src = "./images/bspear.png";
    } else if (this.type === 1 && this.faction === "red") {
      this.img.src = "./images/rspear.png";
    } else if (this.type === 1 && this.faction === "yellow") {
      this.img.src = "./images/yspear.png";
    }
    //horse rotation
    else if (this.type === 2 && this.faction === "blue") {
      if (this.facing === "right") {
        this.img.src = "./images/bhorseright.png";
      } else {
        this.img.src = "./images/bhorseleft.png";
      }
    } else if (this.type === 2 && this.faction === "red") {
      if (this.facing === "right") {
        this.img.src = "./images/rhorseright.png";
      } else {
        this.img.src = "./images/rhorseleft.png";
      }
    } else if (this.type === 2 && this.faction === "yellow") {
      if (this.facing === "right") {
        this.img.src = "./images/yhorseright.png";
      } else {
        this.img.src = "./images/yhorseleft.png";
      }
    }
    //bow rotation
    else if (this.type === 3 && this.faction === "blue") {
      if (this.facing === "right") {
        this.img.src = "./images/bbowright.png";
      } else {
        this.img.src = "./images/bbowleft.png";
      }
    } else if (this.type === 3 && this.faction === "yellow") {
      if (this.facing === "right") {
        this.img.src = "./images/ybowright.png";
      } else {
        this.img.src = "./images/ybowleft.png";
      }
    } else if (this.type === 3 && this.faction === "red") {
      if (this.facing === "right") {
        this.img.src = "./images/rbowright.png";
      } else {
        this.img.src = "./images/rbowleft.png";
      }
    }
    //for units with half hp use the next line
    //this.game.ctx.drawImage(this.img, this.x + 25, this.y + 25, 50, 50);
    if (this.hp === 10) {
      this.game.ctx.drawImage(this.img, this.x, this.y, 90, 90);
    } else if (this.hp > 9) {
      this.game.ctx.drawImage(this.img, this.x, this.y, 85, 85);
    } else if (this.hp > 8) {
      this.game.ctx.drawImage(this.img, this.x, this.y, 80, 80);
    } else if (this.hp > 7) {
      this.game.ctx.drawImage(this.img, this.x + 5, this.y + 5, 70, 70);
    } else if (this.hp > 6) {
      this.game.ctx.drawImage(this.img, this.x + 10, this.y + 10, 65, 65);
    } else if (this.hp > 5) {
      this.game.ctx.drawImage(this.img, this.x + 15, this.y + 15, 60, 60);
    } else if (this.hp > 4) {
      this.game.ctx.drawImage(this.img, this.x + 20, this.y + 20, 55, 55);
    } else {
      this.game.ctx.drawImage(this.img, this.x + 25, this.y + 25, 50, 50);
    }

    //this.game.ctx.drawImage(this.img, this.x, this.y, 90, 90);
  }

  drawSquare() {
    //draws a square around the selected unit
    if (this.faction === "blue") {
      this.square.src = "./images/bsquare.png";
    } else if (this.faction === "red") {
      this.square.src = "./images/rsquare.png";
    } else if (this.faction === "yellow") {
      this.square.src = "./images/ysquare.png";
    }

    this.game.ctx.drawImage(this.square, this.x, this.y, 100, 100);
  }

  drawStamina() {
    //draws a hint that a unit is ready to be moved
    if (this.stamina >= 5) {
      this.staminaFrame.src = "./images/staminag.png";
    } else if (this.stamina > 2) {
      this.staminaFrame.src = "./images/staminay.png";
    } else if (this.stamina < 2) {
      this.staminaFrame.src = "./images/staminar.png";
    }

    this.game.ctx.drawImage(this.staminaFrame, this.x, this.y, 100, 100);
  }

  //draws units on turn based mode. should be moved to a different file
  drawTbm() {
    //spear color selection
    if (this.type === 1 && this.faction === "blue") {
      this.img.src = "./images/bspear.png";
    } else if (this.type === 1 && this.faction === "red") {
      this.img.src = "./images/rspear.png";
    } else if (this.type === 1 && this.faction === "yellow") {
      this.img.src = "./images/yspear.png";
    }
    //horse rotation
    else if (this.type === 2 && this.faction === "blue") {
      if (this.facing === "right") {
        this.img.src = "./images/bhorseright.png";
      } else {
        this.img.src = "./images/bhorseleft.png";
      }
    } else if (this.type === 2 && this.faction === "red") {
      if (this.facing === "right") {
        this.img.src = "./images/rhorseright.png";
      } else {
        this.img.src = "./images/rhorseleft.png";
      }
    } else if (this.type === 2 && this.faction === "yellow") {
      if (this.facing === "right") {
        this.img.src = "./images/yhorseright.png";
      } else {
        this.img.src = "./images/yhorseleft.png";
      }
    }
    //bow rotation
    else if (this.type === 3 && this.faction === "blue") {
      if (this.facing === "right") {
        this.img.src = "./images/bbowright.png";
      } else {
        this.img.src = "./images/bbowleft.png";
      }
    } else if (this.type === 3 && this.faction === "yellow") {
      if (this.facing === "right") {
        this.img.src = "./images/ybowright.png";
      } else {
        this.img.src = "./images/ybowleft.png";
      }
    } else if (this.type === 3 && this.faction === "red") {
      if (this.facing === "right") {
        this.img.src = "./images/rbowright.png";
      } else {
        this.img.src = "./images/rbowleft.png";
      }
    }
    //for units with half hp use the next line
    //this.game.ctx.drawImage(this.img, this.x + 25, this.y + 25, 50, 50);
    if (this.hp === 10) {
      this.game.ctx.drawImage(this.img, this.x, this.y, 70, 70);
    } else if (this.hp > 9) {
      this.game.ctx.drawImage(this.img, this.x, this.y, 50, 50);
    }

    //this.game.ctx.drawImage(this.img, this.x, this.y, 90, 90);
  }

  drawSquareTbm() {
    //draws a square around the selected unit
    if (this.faction === "blue") {
      this.square.src = "./images/bsquare.png";
    } else if (this.faction === "red") {
      this.square.src = "./images/rsquare.png";
    } else if (this.faction === "yellow") {
      this.square.src = "./images/ysquare.png";
    }

    this.game.ctx.drawImage(this.square, this.x, this.y, 80, 80);
  }

  drawStaminaTbm() {
    //draws a hint that a unit is ready to be moved
    if (this.stamina >= 5) {
      this.staminaFrame.src = "./images/staminag.png";
    } else if (this.stamina > 2) {
      this.staminaFrame.src = "./images/staminay.png";
    } else if (this.stamina < 2) {
      this.staminaFrame.src = "./images/staminar.png";
    }

    this.game.ctx.drawImage(this.staminaFrame, this.x, this.y, 80, 80);
  }
}

class BlueSoldier extends Soldiers {
  constructor(
    game,
    faction,
    type,
    x,
    y,
    width,
    height,
    gps,
    hp,
    facing,
    isSelected,
    stamina
  ) {
    super(
      game,
      type,
      x,
      y,
      width,
      height,
      gps,
      hp,
      facing,
      isSelected,
      stamina
    );
    this.faction = "blue";
  }
}

class RedSoldier extends Soldiers {
  constructor(
    game,
    faction,
    type,
    x,
    y,
    width,
    height,
    gps,
    hp,
    facing,
    isSelected,
    stamina
  ) {
    super(
      game,
      type,
      x,
      y,
      width,
      height,
      gps,
      hp,
      facing,
      isSelected,
      stamina
    );
    this.faction = "red";
  }
}

class YellowSoldier extends Soldiers {
  constructor(
    game,
    faction,
    type,
    x,
    y,
    width,
    height,
    gps,
    hp,
    facing,
    isSelected,
    stamina
  ) {
    super(
      game,
      type,
      x,
      y,
      width,
      height,
      gps,
      hp,
      facing,
      isSelected,
      stamina
    );
    this.faction = "yellow";
  }
}
