import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card>
      <CardActionArea>
        <Link to={`pokemon/${pokemon.name}`} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            image={pokemon.image}
            title={pokemon.name}
            sx={{ height: 100, objectFit: "contain" }}
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography sx={{ textTransform: "capitalize" }}>
                {pokemon.name}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }}>
                #{pokemon.pokedexNumber}
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
