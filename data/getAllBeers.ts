import axios from "axios";
import punkAPI from "../services/punkAPI";
import { Beer } from "../types";
import { MAX_PAGE_SIZE, TOTAL_BEERS } from "../constants";

export const getAllBeers = async (): Promise<Beer[] | null> => {
  try {
    const promises = [];
    for (
      let page = 1;
      page < Math.ceil((TOTAL_BEERS + MAX_PAGE_SIZE) / MAX_PAGE_SIZE);
      page += 1
    ) {
      promises.push(punkAPI.get(`/?page=${page}&per_page=${MAX_PAGE_SIZE}`));
    }
    const allBeers: Beer[] = [];
    await axios.all(promises).then(function (results) {
      results.flatMap(function (res) {
        allBeers.push(res.data);
      });
    });
    return allBeers.flatMap((pageResult) => pageResult);
  } catch (error) {
    return null;
  }
};
