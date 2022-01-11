/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FILTERS } from "./constants";
import { FiltersOptions, RangeFilterOption, Hop, Malt } from "./types";

// FIX
export const addFiltersToUrl = (
  url: string,
  filters?: FiltersOptions
): string => {
  if (!filters) return url;
  let filterString = "";
  const filtersEntries = Object.entries(filters);
  filtersEntries.forEach(([filterKey, filterValue]) => {
    if (filterKey === "name" && filterValue) {
      filterString += `&${FILTERS[filterKey]}=${filterValue}`;
    } else if (filterKey !== "name" && filterValue) {
      // @ts-ignore
      Object.entries(filters[filterKey]).forEach(
        ([rangeFilterKey, rangeFilterValue]) => {
          if (rangeFilterValue)
            // @ts-ignore
            filterString += `&${FILTERS[filterKey][rangeFilterKey]}=${filters[filterKey][rangeFilterKey]}`;
        }
      );
    }
  });
  return url.concat(filterString);
};

export const getNoRepeatedIngredients = (
  ingredients: Hop[] | Malt[]
): Hop[] | Malt[] =>
  ingredients
    // @ts-ignore
    .reduce((acc: Hop[] | Malt[], curr: Hop | Malt) => {
      // @ts-ignore
      if (acc.findIndex(({ name }) => name === curr.name) < 0) acc.push(curr);
      return acc;
    }, []);

export const parseRangeValueToArray = (
  rangeObj?: RangeFilterOption<number>
) => {
  if (!rangeObj) return undefined;
  const { gt, lt } = rangeObj;
  return [gt, lt];
};
