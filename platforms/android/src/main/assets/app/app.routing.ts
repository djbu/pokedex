import { PokemonPage } from "./pages/pokemon/pokemon.component";
import { ListPage } from "./pages/list/list.component";

export const routes = [
    { path: "", component: ListPage },
  { path: "pokemon/:url", component: PokemonPage }  
];

export const navigatableComponents = [
  PokemonPage,
  ListPage
];