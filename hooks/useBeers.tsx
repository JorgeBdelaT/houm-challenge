import { useCallback, useState } from "react";
import { PAGE_SIZE } from "../constants";
import { getBeers } from "../data";
import { Beer, FiltersOptions } from "../types";

const useBeers = (initialBeers: Beer[]) => {
  const [page, setPage] = useState(1);
  const [beers, setbBers] = useState(initialBeers);
  const [loadingMore, setLoadingMore] = useState(false);
  const [refetching, setRefetching] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState(false);

  // TODO
  // agregar filtros
  const loadMore = useCallback(
    async (filters?: FiltersOptions) => {
      setLoadingMore(true);
      try {
        if (!refetching) {
          const fetchedBeers = await getBeers(page + 1, filters);
          if (!fetchedBeers) {
            setError(true);
            setbBers([]);
            setPage(1);
          } else if (fetchedBeers.length < PAGE_SIZE) {
            setbBers((prevBeers) => [...prevBeers, ...fetchedBeers]);
            setError(false);
            setPage((prevPage) => prevPage + 1);
            setHasNextPage(false);
          } else {
            setbBers((prevBeers) => [...prevBeers, ...fetchedBeers]);
            setError(false);
            setPage((prevPage) => prevPage + 1);
          }
        }
      } catch (error) {
        setbBers([]);
        setError(true);
        setPage(1);
      } finally {
        setLoadingMore(false);
      }
    },
    [page, refetching]
  );

  const refetch = useCallback(async (filters?: FiltersOptions) => {
    setRefetching(true);
    setHasNextPage(true);
    try {
      const fetchedBeers = await getBeers(1, filters);
      if (!fetchedBeers) {
        setError(true);
        setbBers([]);
        setPage(1);
      } else {
        setError(false);
        setbBers(fetchedBeers);
        setPage(1);
      }
    } catch (error) {
      setError(true);
      setbBers([]);
      setPage(1);
    } finally {
      setRefetching(false);
    }
  }, []);

  return {
    beers,
    loadingMore,
    refetching,
    hasNextPage,
    error,
    loadMore,
    refetch,
  };
};

export default useBeers;
