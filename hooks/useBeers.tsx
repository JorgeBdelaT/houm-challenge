import { useCallback, useMemo, useState } from "react";
import { PAGE_SIZE } from "../constants";
import { getBeers } from "../data";
import { Beer } from "../types";

const useBeers = (initialBeers: Beer[]) => {
  const [state, setState] = useState({
    page: 1,
    beers: initialBeers,
    loading: false,
    hasNextPage: true,
    error: false,
  });

  const loadMore = useCallback(async () => {
    const { page } = state;
    setState((prev) => ({ ...prev, loading: true }));
    try {
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
    } catch (error) {
      setState((prev) => ({ ...prev, error: true, beers: [], page: 1 }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, [state]);

  return useMemo(() => {
    const { beers, loading, hasNextPage, error } = state;
    return {
      beers,
      loading,
      hasNextPage,
      error,
      loadMore,
    };
  }, [state, loadMore]);
};

export default useBeers;
