import { Button, Container } from "@mui/material";
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons";

const Home = () => {
  const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();
  return (
    <Container>
      <PokemonList pokemons={pokemons} />
      {hasMorePokemon ? (
        <Button variant="contained" onClick={fetchNextPage}>
          Load more Pokemon
        </Button>
      ) : null}
      ;
    </Container>
  );
};

export default Home;
