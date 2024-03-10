import { Button, Container } from "@mui/material";
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const Home = () => {
  const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();
  const [filterText, setFilterText] = useState("");

  return (
    <Container>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <PokemonList pokemons={pokemons} filterText={filterText} />
      {hasMorePokemon ? (
        <Button variant="contained" onClick={fetchNextPage}>
          Load more Pokemon
        </Button>
      ) : null}
    </Container>
  );
};

export default Home;
