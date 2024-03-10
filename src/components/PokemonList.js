import { Grid } from "@mui/material";
import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, filterText }) => {
  const rows = [];
  console.log(pokemons);
  const filteredPokemons = pokemons
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  pokemons.forEach((product) => {
    console.log(product);
    if (product.name.charAt(0) !== filterText) {
      return;
    }
    rows.push(
      <Grid item xs={4}>
        <PokemonCard key={product.name} pokemon={product} />
      </Grid>
    );
  });

  return (
    <Grid container spacing={2}>
      {filteredPokemons.map((pokemon) => (
        <Grid item xs={4} key={pokemon.name}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonList;
