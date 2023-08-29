import { showLoader, hideLoader } from "./loader.js";
import { createMovieCard } from "./movieCard.js";

const API_URL = "https://www.eirikveskje.com/wp-json/wc/v3/products/?consumer_key=ck_b5877d7b70a5804f0ad7e9289848c8613753495b&consumer_secret=cs_b9042d621a1673ff92a770a2094124ab3c2148f0";

export const fetchMovies = async () => {
  try {
    showLoader();
    const response = await fetch(API_URL);
    const data = await response.json();
    const movieContainer = document.querySelector("#movieContainer");
    movieContainer.innerHTML = "";

    data.forEach((movie) => movieContainer.appendChild(createMovieCard(movie)));

    hideLoader();
  } catch (error) {
    console.error("Error fetching movies:", error);
    hideLoader();
  }
};
