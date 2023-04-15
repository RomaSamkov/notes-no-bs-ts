abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} Kick with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return "Yohoooo!";
  }
  get name(): string {
    return "Ryu";
  }
}

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return "Lightning kick!";
  }
  get name(): string {
    return "Chun-Li";
  }
}

const ryu = new Ryu();
const chunli = new ChunLi();

console.log(ryu.getSpecialAttack());
ryu.fight();
chunli.fight();
