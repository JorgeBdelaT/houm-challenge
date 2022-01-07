import { Box, Grid } from "@mui/material";
import React from "react";
import { Beer } from "../../types";
import BeerCard from "./BeerCard";
import styles from "./styles";

interface BeersGridProps {
  beers: Beer[];
}

const BeersGrid: React.FC<BeersGridProps> = ({ beers }) => {
  return (
    <Box sx={styles.grid.box}>
      <Grid container spacing={styles.grid.spacing}>
        {beers.map((beer) => (
          <Grid item xs={styles.item.xs} key={beer.id} md={styles.item.md}>
            <BeerCard beer={beer} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BeersGrid;
