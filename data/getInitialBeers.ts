import punkAPI from "../services/punkAPI";
import { Beer } from "../types";

export const getInitialBeers: () => Promise<Beer[]> = async () => {
  try {
    const beers = await (await punkAPI.get("/?per_page=10")).data;
    return beers;
  } catch (error) {
    return [];
  }
};
