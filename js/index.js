import { fetchMovies } from "./movies.js";
import { fetchFeaturedProduct } from "./featuredProduct.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchMovies();
  fetchFeaturedProduct();
});
