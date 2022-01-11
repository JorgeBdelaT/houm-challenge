import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import BeersGrid from "../components/beers-grid/BeersGrid";
import Filter from "../components/filter/Filter";
import ScrollToTopButton from "../components/scroll-to-top-button/ScrollToTopButton";
import useBeers from "../hooks/useBeers";
import { FiltersOptions } from "../types";

const Home: NextPage = () => {
  const {
    beers,
    loadingMore,
    refetching,
    hasNextPage,
    error,
    loadMore,
    refetch,
  } = useBeers([]);

  const [filters, setFilters] = useState<FiltersOptions | undefined>(undefined);

  const handleFiltersChange = (newFilters?: FiltersOptions) => {
    refetch(newFilters);
    setFilters(newFilters);
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      <Head>
        <title>BrewDog Beers</title>
        <meta name="description" content="home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Filter
        loading={refetching}
        onFiltersChange={handleFiltersChange}
        selectedFilters={filters}
      />
      <BeersGrid
        beers={beers}
        disabled={error}
        loading={loadingMore}
        loadMore={() => loadMore(filters)}
        hasNextPage={hasNextPage}
      />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
