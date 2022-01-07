import punkAPI from "../services/punkAPI";
import { Beer } from "../types";

export const getBeerInfo = async (id: number): Promise<Beer | null> => {
  try {
    const beers = await (await punkAPI.get(`/${id}`)).data;
    return beers[0];
  } catch (error) {
    return null;
  }
};
