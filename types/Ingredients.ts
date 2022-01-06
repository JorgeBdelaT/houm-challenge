import { Metric } from "./Metric";

type Malt = {
  amount: Metric;
  name: string;
};

type Hop = {
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
