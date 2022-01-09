import { useCallback, useMemo, useState } from "react";
import { PAGE_SIZE } from "../constants";
import { getBeers } from "../data";
import { Beer, FiltersOptions } from "../types";

const useBeers = (initialBeers: Beer[]) => {
  const [state, setState] = useState({
    page: 1,
    beers: initialBeers,
    loadingMore: false,
    refetching: false,
    hasNextPage: true,
    error: false,
  });

  // TODO
  // agregar filtros
  // evitar que se corra despues del refetch
  const loadMore = useCallback(async () => {
    const { page, refetching } = state;
    setState((prev) => ({ ...prev, loadingMore: true }));
    try {
      if (!refetching) {
        const fetchedBeers = await getBeers(page + 1);
        if (!fetchedBeers) {
          setState((prev) => ({ ...prev, error: true, beers: [], page: 1 }));
        } else if (fetchedBeers.length < PAGE_SIZE) {
          setState((prev) => ({
            ...prev,
            beers: [...prev.beers, ...fetchedBeers],
            error: false,
            page: prev.page + 1,
            hasNextPage: false,
          }));
        } else {
          setState((prev) => ({
            ...prev,
            beers: [...prev.beers, ...fetchedBeers],
            error: false,
            page: prev.page + 1,
          }));
        }
      }
    } catch (error) {
      setState((prev) => ({ ...prev, error: true, beers: [], page: 1 }));
    } finally {
      setState((prev) => ({ ...prev, loadingMore: false }));
    }
  }, [state]);

  const refetch = useCallback(
    async (filters?: FiltersOptions) => {
      setState((prev) => ({ ...prev, refetching: true }));
      try {
        const fetchedBeers = await getBeers(1, filters);
        if (!fetchedBeers) {
          setState((prev) => ({ ...prev, error: true, beers: [], page: 1 }));
        } else {
          setState((prev) => ({
            ...prev,
            beers: fetchedBeers,
            error: false,
          }));
        }
      } catch (error) {
        setState((prev) => ({ ...prev, error: true, beers: [], page: 1 }));
      } finally {
        setState((prev) => ({ ...prev, refetching: false, page: 1 }));
      }
    },
    [state]
  );

  return useMemo(() => {
    const { beers, loadingMore, refetching, hasNextPage, error } = state;
    return {
      beers,
      loading: loadingMore || refetching,
      hasNextPage,
      error,
      loadMore,
      refetch,
    };
  }, [state, loadMore, refetch]);
};

export default useBeers;
