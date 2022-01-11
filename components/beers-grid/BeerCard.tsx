import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";
import BeerCardMedia from "./BeerCardMedia";
import { Beer } from "../../types";
import styles from "./styles";

interface BeerCardProps {
  beer: Beer;
  isFavorite: boolean;
  // eslint-disable-next-line no-unused-vars
  addBeerToFavorites: (id: number) => void;
}

const BeerCard: React.FC<BeerCardProps> = ({
  beer,
  addBeerToFavorites,
  isFavorite,
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/beers/${beer.id}`);
  };

  const [favIconColor, setFavIconColor] = useState<"secondary" | "primary">(
    "secondary"
  );

  useEffect(
    () => setFavIconColor(isFavorite ? "primary" : "secondary"),
    [isFavorite]
  );

  return (
    <Card>
      <BeerCardMedia beer={beer} onClick={handleCardClick} />
      <CardContent>
        <Typography gutterBottom noWrap variant="h5" component="div">
          {beer.name}
        </Typography>
        <Typography noWrap variant="body1" color={styles.text.tagLine}>
          {beer.tagline}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={() => addBeerToFavorites(beer.id)}
        >
          <FavoriteIcon color={favIconColor} />
        </IconButton>
        <Button onClick={handleCardClick} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BeerCard;
