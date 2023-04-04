let username: string = "User";
let hasLoggedIn: boolean = true;

username += "TypeScript";

console.log(hasLoggedIn);

const names: string[] = username.split(" ");
const myValues: Array<number> = [1, 3, 6];

interface Person {
  firstName: string;
  lastname: string;
}
const myPerson: Person = {
  firstName: "User",
  lastname: "Developer",
};

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";
