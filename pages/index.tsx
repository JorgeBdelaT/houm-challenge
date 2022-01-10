import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import BeersGrid from "../components/beers-grid/";
import Filter from "../components/filter";
import ScrollToTopButton from "../components/scroll-to-top-button";
import { getBeers } from "../data";
import useBeers from "../hooks/useBeers";
import { Beer, FiltersOptions } from "../types";

interface HomeProps {
  initialBeers: Beer[];
}

const Home: NextPage<HomeProps> = ({ initialBeers }) => {
  const {
    beers,
    loadingMore,
    refetching,
    hasNextPage,
    error,
    loadMore,
    refetch,
  } = useBeers(initialBeers);

  const [filters, setFilters] = useState<FiltersOptions | undefined>(undefined);

  const handleFiltersChange = (newFilters?: FiltersOptions) => {
    refetch(newFilters);
    setFilters(newFilters);
  };

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

export async function getServerSideProps() {
  const initialBeers = await getBeers();
  if (!initialBeers) return { notFound: true };
  return { props: { initialBeers } };
}

export default Home;
