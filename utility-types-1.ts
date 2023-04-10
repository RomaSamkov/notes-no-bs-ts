interface MyUser {
  name: string;
  id: string;
  email?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge({ name: "TS", id: "foo", email: "email@mail" }, { name: "React" })
);

type RequiredMyUser = Required<MyUser>;
type JustEmailandName = Pick<MyUser, "email" | "name">;

const mapById = (users: MyUser[]): Record<MyUser["id"], Omit<MyUser, "id">> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return { ...a, [id]: other };
  }, {});
};

console.log(
  mapById([
    { id: "foo", name: "TS" },
    { id: "bz", name: "JS" },
  ])
);
