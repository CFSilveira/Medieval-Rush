//let blueArmy = game.blueArmy;
//let redArmy = game.redArmy;
//let baseArray = game.baseArray;

class Computer {
    constructor(game) {
      this.game = game;
      this.blueArmy = this.game.blueArmy;
      this.redArmy = this.game.redArmy;
      this.baseArray = this.game.baseArray;
    }

    badAi() {
        let leftChance = Math.floor(Math.random() * 10) + 1;
        let rightChance = Math.floor(Math.random() * 10) + 1;
        let upChance = Math.floor(Math.random() * 10) + 1;
        let downChance = Math.floor(Math.random() * 10) + 1;
    
        for (let i = 0; i < this.redArmy.length; i++){
            if (this.redArmy[i].isSelected) {
                //leftChance = leftChance + ()
    
                if (leftChance < rightChance) {
                    this.redArmy[i].x += 100;
                    this.redArmy[i].stamina = 0;
                    this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString();
                    console.log('Unit moved right');
                    this.redArmy[i].isSelected = false;
                    let nextUnit = (i+1) % this.blueArmy.length;
                    this.redArmy[nextUnit].isSelected = true;
                    break;
                } else if (leftChance > rightChance) {
                    this.redArmy[i].x -= 100;
                    this.redArmy[i].stamina = 0;
                    this.redArmy[i].gps = (this.redArmy[i].x / 100).toString() + (this.redArmy[i].y / 100).toString();
                    console.log('Unit moved left');
                    this.redArmy[i].isSelected = false;
                    let nextUnit = (i+1) % this.redArmy.length;
                    this.redArmy[nextUnit].isSelected = true;
                    break;
                }
    
                
    
            }
        }
    
    };

}


