import { Metric } from "./Metric";

export type Malt = {
  amount: Metric;
  name: string;
};

export type Hop = {
  add: string;
  amount: Metric;
  attribute: string;
  name: string;
};

export type Ingredients = {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
};
