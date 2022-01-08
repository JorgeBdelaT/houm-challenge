import * as React from "react";
import { Box, CardActionArea } from "@mui/material";
import Image from "next/image";
import { Beer } from "../../types";
import { NO_BEER_IMG_URL } from "../../constants";
import styles from "./styles";

interface BeerCardMediaProps {
  beer: Beer;
  onClick: () => void;
}

const BeerCardMedia: React.FC<BeerCardMediaProps> = ({ beer, onClick }) => {
  return (
    <CardActionArea onClick={onClick}>
      <Box sx={styles.cardMedia.box}>
        <Image
          alt={beer.name}
          height={styles.cardMedia.img.height}
          src={beer.image_url || NO_BEER_IMG_URL}
          width={styles.cardMedia.img.width}
        />
      </Box>
    </CardActionArea>
  );
};

export default BeerCardMedia;
