// const beforeLoading = "beforeLoading";
// const loading = "loading";
// const loaded = "loaded";

enum LoadingState {
  beforeLoading = "beforeLoading",
  loading = "loading",
  loaded = "loaded",
}

const englishLoadingStates = {
  [LoadingState.beforeLoading]: "Before load",
};

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.loading));

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
}

console.log(rollDice(1));

function sendEvent(name: "JS", data: { productId: number }): void;
function sendEvent(name: "TS", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("JS", { productId: 1 });
