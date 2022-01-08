import { Box, Grid } from "@mui/material";
import React from "react";
import useBeers from "../../hooks/useBeers";
import { Beer } from "../../types";
import BeerCard from "./BeerCard";
import styles from "./styles";
import InfiniteScroller from "../infinite-scroller";

interface BeersGridProps {
  initialBeers: Beer[];
}

const BeersGrid: React.FC<BeersGridProps> = ({ initialBeers }) => {
  const { beers, loading, hasNextPage, error, loadMore } =
    useBeers(initialBeers);

  return (
    <Box sx={styles.gridBox}>
      <Grid container spacing={styles.gridSpacing} sx={styles.grid}>
        <InfiniteScroller
          disabled={error}
          loading={loading}
          hasNextPage={hasNextPage}
          loadMore={loadMore}
        >
          {beers.map((beer) => (
            <Grid item xs={styles.item.xs} key={beer.id} md={styles.item.md}>
              <BeerCard beer={beer} />
            </Grid>
          ))}
        </InfiniteScroller>
      </Grid>
    </Box>
  );
};

export default BeersGrid;
