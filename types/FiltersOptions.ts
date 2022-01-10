export type RangeFilterOption<T> = { gt: T; lt: T };

export type FiltersOptions = {
  abv?: RangeFilterOption<number>;
  ibu?: RangeFilterOption<number>;
  name?: string;
};

export type FilterKey = keyof FiltersOptions;
