import { Grid } from "@mui/material";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <Grid container spacing={2}>
      {pokemons.length > 0
        ? pokemons.map((p) => {
            return (
              <Grid item xs={4}>
                <PokemonCard key={p.name} pokemon={p} />
              </Grid>
            );
          })
        : null}
    </Grid>
  );
};

export default PokemonList;
