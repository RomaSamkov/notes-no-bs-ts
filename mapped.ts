type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: "TS",
  breed: "language",
  age: 2,
};

interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlag<Type> = {
  [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlag<DogInfo>;

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};

function listenToObjects<T>(obj: T, listeners: Listeners<T>): void {
  throw "Needs to implement";
}

const lg: DogInfo = {
  name: "JS",
  age: 13,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObjects(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
});
