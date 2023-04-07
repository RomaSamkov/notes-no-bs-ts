function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
}

printIngredient("10", "TS");
printIngredient("10", "JS", "CSS");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string | undefined {
  if (user.info) {
    return user.info.email;
  }
  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}
