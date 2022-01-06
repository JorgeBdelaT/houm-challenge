import { Metric } from "./Metric";

type MashTemp = {
  temp: Metric;
  duration: number;
};

type Fermentation = {
  temp: Metric;
};

export type Method = {
  fermentation: Fermentation;
  mash_temp: MashTemp;
  twist: string;
};
