class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const ts = new Doggy("TS", 22);

class DogList {
  private doggies: Doggy[] = [];

  public static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog(ts);
console.log(DogList.instance.getDogs());
