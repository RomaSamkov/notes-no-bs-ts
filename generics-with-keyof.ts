function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Mops", age: 12 },
  { name: "TS", age: 13 },
];

console.log(pluck(dogs, "age"));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCard: BaseEvent & { quantity: number; productID: string };
  checkOut: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log(name, data);
}

sendEvent("addToCard", {
  productID: "foo",
  user: "sponge",
  time: 12,
  quantity: 4,
});

sendEvent("checkOut", { time: 1, user: "bob" });
