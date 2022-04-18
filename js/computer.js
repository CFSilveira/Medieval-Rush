class Computer {
  constructor(game) {
    this.game = game;
    this.blueArmy = this.game.blueArmy;
    this.redArmy = this.game.redArmy;
    this.baseArray = this.game.baseArray;
  }

  badAi() {
    for (let i = 0; i < this.redArmy.length; i++) {
      let redBases = 0;
      //check if all bases are captured
      this.baseArray.forEach((base) => {
        if (base.faction === "red") {
          redBases++;
        }
      });

      if (this.redArmy[i].stamina >= 5) {
        let nextMove = ["right", "wait"];

        //either chases enemy units or captures bases
        if (redBases === 6) {
          nextMove = this.altMovement(this.redArmy[i]);
        } else {
          nextMove = this.movement(this.redArmy[i]);
        }

        //computer makes the move

        //there's already an allied piece on the desired square
        if (nextMove[1] === "wait") {
          this.redArmy[i].stamina = 4;
        }
        // moves left
        else if (nextMove[0] === "left") {
          let futurePosition =
            ((this.redArmy[i].x - 100) / 100).toString() +
            (this.redArmy[i].y / 100).toString();
          let enemy;
          this.blueArmy.forEach((bluesoldier) => {
            if (bluesoldier.gps === futurePosition) {
              enemy = bluesoldier;
            }
          });

          if (enemy) {
            console.log("Fight!");
            this.redArmy[i].stamina = 0;
            this.redArmy[i].facing = "left";
            this.fight(this.redArmy[i], enemy);
          } else {
            console.log(
              `Unit on ${this.redArmy[i].gps} moved left to ${futurePosition}`
            );
            this.redArmy[i].facing = "left";
            this.redArmy[i].x -= 100;
            this.redArmy[i].stamina = 0;
            this.redArmy[i].gps =
              (this.redArmy[i].x / 100).toString() +
              (this.redArmy[i].y / 100).toString();
            this.baseArray.forEach((base) => {
              if (base.gps === futurePosition) {
                console.log("Captured base");
                base.faction = "red";
              }
            });
          }
        }
        // moves right
        else if (nextMove[0] === "right") {
          let futurePosition =
            ((this.redArmy[i].x + 100) / 100).toString() +
            (this.redArmy[i].y / 100).toString();
          let enemy;
          this.blueArmy.forEach((bluesoldier) => {
            if (bluesoldier.gps === futurePosition) {
              enemy = bluesoldier;
            }
          });

          if (enemy) {
            console.log("Fight!");
            this.redArmy[i].stamina = 0;
            this.redArmy[i].facing = "right";
            this.fight(this.redArmy[i], enemy);
          } else {
            console.log(
              `Unit on ${this.redArmy[i].gps} moved right to ${futurePosition}`
            );
            this.redArmy[i].facing = "right";
            this.redArmy[i].x += 100;
            this.redArmy[i].stamina = 0;
            this.redArmy[i].gps =
              (this.redArmy[i].x / 100).toString() +
              (this.redArmy[i].y / 100).toString();
            this.baseArray.forEach((base) => {
              if (base.gps === futurePosition) {
                base.faction = "red";
              }
            });
          }
        }
        // moves up
        else if (nextMove[0] === "up") {
          let futurePosition =
            (this.redArmy[i].x / 100).toString() +
            ((this.redArmy[i].y - 100) / 100).toString();

          let enemy;
          this.blueArmy.forEach((bluesoldier) => {
            if (bluesoldier.gps === futurePosition) {
              enemy = bluesoldier;
            }
          });
          if (enemy) {
            console.log("Fight!");
            this.redArmy[i].stamina = 0;
            this.fight(this.redArmy[i], enemy);
          } else {
            console.log(
              `Unit on ${this.redArmy[i].gps} moved up to ${futurePosition}`
            );
            this.redArmy[i].y -= 100;
            this.redArmy[i].stamina = 0;
            this.redArmy[i].gps =
              (this.redArmy[i].x / 100).toString() +
              (this.redArmy[i].y / 100).toString();
            this.baseArray.forEach((base) => {
              if (base.gps === futurePosition) {
                base.faction = "red";
              }
            });
          }
        }
        // moves down
        else if (nextMove[0] === "down") {
          let futurePosition =
            (this.redArmy[i].x / 100).toString() +
            ((this.redArmy[i].y + 100) / 100).toString();

          let enemy;
          this.blueArmy.forEach((bluesoldier) => {
            if (bluesoldier.gps === futurePosition) {
              enemy = bluesoldier;
            }
          });

          if (enemy) {
            console.log("Fight!");
            this.redArmy[i].stamina = 0;
            this.fight(this.redArmy[i], enemy);
          } else {
            console.log(
              `Unit on ${this.redArmy[i].gps} moved down to ${futurePosition}`
            );
            this.redArmy[i].y += 100;
            this.redArmy[i].stamina = 0;
            this.redArmy[i].gps =
              (this.redArmy[i].x / 100).toString() +
              (this.redArmy[i].y / 100).toString();
            this.baseArray.forEach((base) => {
              if (base.gps === futurePosition) {
                base.faction = "red";
              }
            });
          }
        }
      }
    }
  }

  movement(unidade) {
    let computerDecision = ["right", "wait"];

    this.baseArray.forEach((base) => {
      if (
        (base.faction === "blue" && base.x < unidade.x) ||
        (base.faction === "neutral" && base.x < unidade.x)
      ) {
        computerDecision = ["left", "move"];
        let futurePosition =
          ((unidade.x - 100) / 100).toString() + (unidade.y / 100).toString();
        this.redArmy.forEach((redsoldier) => {
          if (redsoldier.gps === futurePosition) {
            computerDecision = ["left", "wait"];
          }
        });
        return computerDecision;
      } else if (
        (base.faction === "blue" && base.x > unidade.x) ||
        (base.faction === "neutral" && base.x > unidade.x)
      ) {
        computerDecision = ["right", "move"];
        let futurePosition =
          ((unidade.x + 100) / 100).toString() + (unidade.y / 100).toString();
        this.redArmy.forEach((redsoldier) => {
          if (redsoldier.gps === futurePosition) {
            computerDecision = ["right", "wait"];
          }
        });
        return computerDecision;
      } else if (
        (base.faction === "blue" && base.y < unidade.y) ||
        (base.faction === "neutral" && base.y < unidade.y)
      ) {
        computerDecision = ["up", "move"];
        let futurePosition =
          (unidade.x / 100).toString() + ((unidade.y - 100) / 100).toString();
        this.redArmy.forEach((redsoldier) => {
          if (redsoldier.gps === futurePosition) {
            computerDecision = ["up", "wait"];
          }
        });
        return computerDecision;
      } else if (
        (base.faction === "blue" && base.y > unidade.y) ||
        (base.faction === "neutral" && base.y > unidade.y)
      ) {
        computerDecision = ["down", "move"];
        let futurePosition =
          (unidade.x / 100).toString() + ((unidade.y + 100) / 100).toString();
        this.redArmy.forEach((redsoldier) => {
          if (redsoldier.gps === futurePosition) {
            computerDecision = ["down", "move"];
          }
        });
        return computerDecision;
      }
    });
    return computerDecision;
  }

  altMovement(unidade) {
    let computerDecision = ["right", "wait"];

    this.blueArmy.forEach((soldier) => {
      if (soldier.faction === "blue" && soldier.x < unidade.x) {
        computerDecision = ["left", "move"];
        let futurePosition =
          ((unidade.x - 100) / 100).toString() + (unidade.y / 100).toString();
        this.redArmy.forEach((redsoldier) => {
          if (redsoldier.gps === futurePosition) {
            computerDecision = ["left", "wait"];
          }
        });
        return computerDecision;
      } else if (soldier.faction === "blue" && soldier.x > unidade.x) {
        computerDecision = ["right", "move"];
        let futurePosition =
          ((unidade.x + 100) / 100).toString() + (unidade.y / 100).toString();
        this.redArmy.forEach((redsoldier) => {
          if (redsoldier.gps === futurePosition) {
            computerDecision = ["right", "wait"];
          }
        });
        return computerDecision;
      } else if (soldier.faction === "blue" && soldier.y < unidade.y) {
        computerDecision = ["up", "move"];
        let futurePosition =
          (unidade.x / 100).toString() + ((unidade.y - 100) / 100).toString();
        this.redArmy.forEach((redsoldier) => {
          if (redsoldier.gps === futurePosition) {
            computerDecision = ["up", "wait"];
          }
        });
        return computerDecision;
      } else if (soldier.faction === "blue" && soldier.y > unidade.y) {
        computerDecision = ["down", "move"];
        let futurePosition =
          (unidade.x / 100).toString() + ((unidade.y + 100) / 100).toString();
        this.redArmy.forEach((redsoldier) => {
          if (redsoldier.gps === futurePosition) {
            computerDecision = ["down", "move"];
          }
        });
        return computerDecision;
      }
      return computerDecision;
    });
    return computerDecision;
  }

  fight(attacker, defender) {
    let attackerStrength = attacker.hp;
    let defenderStrength = defender.hp;
    //calculate battle results, units deal twice/half dmg depending on unit types (rock / paper / scissor)
    if (attacker.type === 1) {
      switch (defender.type) {
        case 1:
          attacker.hp -= defenderStrength;
          defender.hp -= attackerStrength;
          break;
        case 2:
          attacker.hp -= defenderStrength / 2;
          defender.hp -= attackerStrength * 2;
          break;
        case 3:
          attacker.hp -= defenderStrength * 2;
          defender.hp -= attackerStrength / 2;
          break;
      }
    } else if (attacker.type === 2) {
      switch (defender.type) {
        case 1:
          attacker.hp -= defenderStrength * 2;
          defender.hp -= attackerStrength / 2;
          break;
        case 2:
          attacker.hp -= defenderStrength;
          defender.hp -= attackerStrength;
          break;
        case 3:
          attacker.hp -= defenderStrength / 2;
          defender.hp -= attackerStrength * 2;
          break;
      }
    } else if (attacker.type === 3) {
      switch (defender.type) {
        case 1:
          attacker.hp -= defenderStrength / 2;
          defender.hp -= attackerStrength * 2;
          break;
        case 2:
          attacker.hp -= defenderStrength * 2;
          defender.hp -= attackerStrength / 2;
          break;
        case 3:
          attacker.hp -= defenderStrength;
          defender.hp -= attackerStrength;
          break;
      }
    }

    //removes units with less than 0.5 HP
    this.blueArmy.forEach((bluesoldier) => {
      let index;
      if (bluesoldier.hp < 1) {
        console.log("Blue unit killed!");
        index = this.blueArmy.indexOf(bluesoldier);
        this.blueArmy.splice(index, 1);
        if (this.blueArmy.length > 0) {
          let nextUnit = (index + 1) % this.blueArmy.length;
          this.blueArmy[nextUnit].isSelected = true;
        }
      }
    });

    this.redArmy.forEach((redsoldier) => {
      let index;
      if (redsoldier.hp < 1) {
        console.log("Red unit killed!");
        index = this.redArmy.indexOf(redsoldier);
        this.redArmy.splice(index, 1);
      }
    });
  }
}
