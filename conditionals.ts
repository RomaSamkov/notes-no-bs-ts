import fetch from "node-fetch";

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}
type FetchPokemonResults<T> = T extends undefined
  ? Promise<PokemonResults>
  : void;

function fetchPokemon<
  T extends undefined | (<PokemonResults>(data: PokemonResults) => void)
>(url: string, cb?: T): FetchPokemonResults<T> {
  if (cb) {
    fetch(url)
      .then((resp) => resp.json())
      .then(cb);
    return undefined as FetchPokemonResults<T>;
  } else {
    return fetch(url).then((resp) => resp.json()) as FetchPokemonResults<T>;
  }
}

// fetchPokemon(
//   "https://pokeapi.co/api/v2/pokemon?limit=10",
//   <PokemonResults>(data) => {
//     data.results.forEach(({ name }) => console.log(name));
//   }
// );
