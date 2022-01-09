export const API_URL = "https://api.punkapi.com/v2/beers";
export const FILTERS = {
  abv: { gt: "abv_gt", lt: "abv_lt" },
  brewed: { gt: "brewed_after", lt: "brewed_before" },
  ibu: { gt: "ibu_gt", lt: "ibu_lt" },
  name: "beer_name",
};
export const MAX_ABV = 100;
export const MAX_IBU = 100;
export const MIN_ABV = 0;
export const MIN_IBU = 0;
export const NO_BEER_IMG_URL = "/no-beer-img.png";
export const PAGES_INFO = {
  pages: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ],
};
export const PAGE_SIZE = 10;
