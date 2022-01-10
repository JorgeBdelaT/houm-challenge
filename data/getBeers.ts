import punkAPI from "../services/punkAPI";
import { Beer, FiltersOptions } from "../types";
import { PAGE_SIZE } from "../constants";
import { addFiltersToUrl } from "../utils";

export const getBeers = async (
  page = 1,
  filters?: FiltersOptions
): Promise<Beer[] | null> => {
  try {
    const paginatedUrl = `?page=${page}&per_page=${PAGE_SIZE}`;
    const urlWithFilters = addFiltersToUrl(paginatedUrl, filters);
    const beers = await (await punkAPI.get(urlWithFilters)).data;
    return beers;
  } catch (error) {
    return null;
  }
};
