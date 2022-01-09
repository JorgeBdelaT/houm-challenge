import { Box, Grid } from "@mui/material";
import React from "react";
import { Beer } from "../../types";
import BeerCard from "./BeerCard";
import styles from "./styles";
import InfiniteScroller from "../infinite-scroller";

interface BeersGridProps {
  beers: Beer[];
  disabled: boolean;
  hasNextPage: boolean;
  loading: boolean;
  loadMore: () => void;
}

// que el scroll sea de esta vista
const BeersGrid: React.FC<BeersGridProps> = ({
  beers,
  disabled,
  hasNextPage,
  loadMore,
  loading,
}) => {
  return (
    <Box sx={styles.gridBox}>
      <Grid container spacing={2} sx={styles.grid}>
        <InfiniteScroller
          disabled={disabled}
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
