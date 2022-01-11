import React, { useCallback } from "react";
import { Box, Chip, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Beer } from "../../types";
import { NO_BEER_IMG_URL } from "../../constants";
import styles from "./styles";
import { getNoRepeatedIngredients } from "../../utils";

interface BeerInfoProps {
  beer: Beer;
}

const BeerInfo: React.FC<BeerInfoProps> = ({ beer }) => {
  const renderIngredients = useCallback(() => {
    const { hops, malt, yeast } = beer.ingredients;
    const hasHops = !!hops.length;
    const hasMalts = !!malt.length;
    const hasYeast = !!yeast;
    return (
      <>
        {hasHops && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={styles.stack}
          >
            <Typography variant="body2">Hops:</Typography>
            {getNoRepeatedIngredients(hops).map(({ name }) => (
              <Chip key={name} label={name} sx={styles.chip} />
            ))}
          </Stack>
        )}
        {hasMalts && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={styles.stack}
          >
            <Typography variant="body2">Malts:</Typography>
            {getNoRepeatedIngredients(malt).map(({ name }) => (
              <Chip key={name} label={name} sx={styles.chip} />
            ))}
          </Stack>
        )}
        {hasYeast && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={styles.stack}
          >
            <Typography variant="body2">Yeast:</Typography>
            <Chip sx={styles.chip} label={yeast} />
          </Stack>
        )}
      </>
    );
  }, [beer]);

  return (
    <Box sx={{ ...styles.mainBox, flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={styles.imgBox}>
        <Image
          alt={beer.name}
          height={styles.img.height}
          src={beer.image_url || NO_BEER_IMG_URL}
          width={styles.img.width}
        />
      </Box>
      <Box sx={styles.descriptionBox}>
        <Box sx={styles.descriptionContent}>
          <Typography variant="h6">Name</Typography>
          <Stack
            alignItems="center"
            direction="row"
            spacing={1}
            sx={styles.descriptionContent}
          >
            <Typography variant="body1">{beer.name}</Typography>
            <Chip label={`IBU: ${beer.ibu ?? "----"}`} />
            <Chip label={`ABV: ${beer.abv ?? "----"}`} />
          </Stack>
        </Box>
        <Box sx={styles.descriptionContent}>
          <Typography variant="h6">Description</Typography>
          <Typography variant="body1">{beer.description}</Typography>
        </Box>
        <Box sx={styles.ingredientsBox}>
          <Typography sx={{ position: "sticky", left: 0 }} variant="h6">
            Ingredients
          </Typography>
          {renderIngredients()}
        </Box>
        <Box sx={styles.descriptionContent}>
          <Typography variant="h6">Brewers tips</Typography>
          <Typography variant="body1">{beer.brewers_tips}</Typography>
        </Box>
        <Box sx={styles.descriptionContent}>
          <Typography variant="h6">Food pairing</Typography>
          <List sx={styles.list}>
            {beer.food_pairing.map((food) => (
              <ListItem key={food} sx={styles.listItem}>
                <Typography variant="body1">- {food}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default BeerInfo;
