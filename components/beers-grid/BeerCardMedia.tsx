import * as React from "react";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
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
      <Box sx={{ ...styles.cardMedia.box, position: "relative" }}>
        <Image
          alt={beer.name}
          height={styles.cardMedia.img.height}
          src={beer.image_url || NO_BEER_IMG_URL}
          width={styles.cardMedia.img.width}
        />
        <Stack
          direction="column"
          alignItems="flex-end"
          spacing={1}
          sx={{ ...styles.stack, position: "absolute" }}
        >
          <Chip label={`IBU: ${beer.ibu ?? "----"}`} />
          <Chip label={`ABV: ${beer.abv ?? "----"}`} />
        </Stack>
      </Box>
    </CardActionArea>
  );
};

export default BeerCardMedia;
