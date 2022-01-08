import punkAPI from "../services/punkAPI";
import { Beer } from "../types";
import { PAGE_SIZE } from "../constants";

export const getBeers = async (page = 1): Promise<Beer[] | null> => {
  try {
    const beers = await (
      await punkAPI.get(`?page=${page}&per_page=${PAGE_SIZE}`)
    ).data;
    return beers;
  } catch (error) {
    return null;
  }
};
