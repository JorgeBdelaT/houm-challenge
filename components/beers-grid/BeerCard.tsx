import * as React from "react";
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
}

const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
  const router = useRouter();

  const handleAddToFavorites = () => {
    // eslint-disable-next-line no-console
    console.log("liked: " + beer.name);
  };

  const handleCardClick = () => {
    router.push(`/beers/${beer.id}`);
  };

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
        <Typography variant="body2" color={styles.text.ibu}>
          IBU: {beer.ibu ?? "----"}
        </Typography>
        <Typography variant="body2" color={styles.text.abv}>
          ABV: {beer.abv ?? "----"}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={handleAddToFavorites}
        >
          <FavoriteIcon />
        </IconButton>
        <Button onClick={handleCardClick} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BeerCard;
