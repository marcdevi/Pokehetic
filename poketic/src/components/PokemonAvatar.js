import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";

const PokemonAvatar = ({ pokemon }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ height: 100, objectFit: "contain" }}
        image={pokemon.sprites.other["home"].front_default}
        title={pokemon.name}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ textTransform: "capitalize" }}>
            {pokemon.name}
          </Typography>
          <Typography sx={{ textTransform: "capitalize" }}>
            #{pokemon.id}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonAvatar;
