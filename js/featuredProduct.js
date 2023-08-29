import { showLoader, hideLoader } from "./loader.js";
import { createMovieCard } from "./movieCard.js";

const API_URL = "https://www.eirikveskje.com/wp-json/wc/v3/products/?consumer_key=ck_b5877d7b70a5804f0ad7e9289848c8613753495b&consumer_secret=cs_b9042d621a1673ff92a770a2094124ab3c2148f0";
const FEATURED_PRODUCT_ID = 2163;

export const fetchFeaturedProduct = async () => {
  try {
    showLoader();
    const response = await fetch(`${API_URL}&include=${FEATURED_PRODUCT_ID}`);
    const data = await response.json();

    hideLoader();

    if (data.length > 0) {
      document.querySelector("#featuredContainer").appendChild(createMovieCard(data[0], true));
    } else {
      console.error("Featured product not found in API response.");
    }
  } catch (error) {
    console.error("Error fetching featured product:", error);
    hideLoader();
  }
};
