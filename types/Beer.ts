import type { Metric } from "./Metric";
import type { Method } from "./Method";
import type { Ingredients } from "./Ingredients";

export type Beer = {
  abv: number;
  attenuation_level: number;
  boil_volume: Metric;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: Ingredients;
  method: Method;
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: Metric;
};
