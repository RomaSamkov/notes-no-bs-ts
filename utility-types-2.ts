type Name = {
  first: string;
  second: string;
};

function addFullName(name: Name): Name & { fullname: string } {
  return {
    ...name,
    fullname: `${name.first} ${name.second}`,
  };
}

function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}

console.log(permuteRows(addFullName, [{ first: "TS", second: "JavaScript" }]));

class PersonWithFullName {
  constructor(public name: Name) {}
  get fullName() {
    return `${this.name.first} ${this.name.second}`;
  }
}

function createObjects<T extends new (...args: any) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
  return data.map((item) => new ObjectType(item));
}

console.log(
  createObjects(PersonWithFullName, [{ first: "JS", second: "JavaScript" }])
);
