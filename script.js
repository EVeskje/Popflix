
import { showLoader, hideLoader } from "./loader.js";

const API_URL = "https://www.eirikveskje.com/wp-json/wc/v3/products/?consumer_key=ck_b5877d7b70a5804f0ad7e9289848c8613753495b&consumer_secret=cs_b9042d621a1673ff92a770a2094124ab3c2148f0";
const FEATURED_PRODUCT_ID = 2163;


const getElement = (selector) => document.querySelector(selector);
const createDivElement = (className, textContent = "") => {
  const divElement = document.createElement("div");
  divElement.className = className;
  divElement.textContent = textContent;
  return divElement;
};

const fetchMovies = async () => {
    try {
      showLoader(); // Show loader before fetching movies
  
      const response = await fetch(API_URL);
      const data = await response.json();
      const movieContainer = getElement("#movieContainer");
      movieContainer.innerHTML = "";
      
      data.forEach(movie => movieContainer.appendChild(createMovieCard(movie)));
      
      hideLoader(); // Hide loader after fetching movies
    } catch (error) {
      console.error("Error fetching movies:", error);
      hideLoader(); // Make sure to hide the loader in case of an error
    }
  };

const createMovieCard = (movie, isFeatured = false) => {
  const movieCard = createDivElement("movie-card");
  
  const movieImage = new Image();
  movieImage.src = movie.images[0].src;
  
  const movieTitle = createDivElement("movie-title", movie.name);
  const moviePrice = createDivElement("movie-price", `Price: $${movie.price}`);
  const movieCategories = createDivElement("movie-categories", `Categories: ${movie.categories.map(category => category.name).join(', ')}`);
  
  if (isFeatured) {
    const featuredBox = createDivElement("featured-box");
    featuredBox.appendChild(createDivElement("featured-text", "Featured"));
    movieCard.appendChild(featuredBox);
  }
  
  [movieImage, movieTitle, moviePrice, movieCategories].forEach(element => movieCard.appendChild(element));
  
  // Add a button to view details
  const viewDetailsButton = document.createElement("button");
  viewDetailsButton.textContent = "View Details";
  viewDetailsButton.classList.add("view-details-button");

  // Add a click event handler to navigate to product page
  viewDetailsButton.addEventListener("click", () => {
    // Redirect to the product page with the movie's ID as a query parameter
    window.location.href = `product.html?id=${movie.id}`;
  });

  // Append button to movie card
  movieCard.appendChild(viewDetailsButton);

  return movieCard;
};

const fetchFeaturedProduct = async () => {
    try {
      showLoader(); // Show loader before fetching featured product
  
      const response = await fetch(`${API_URL}&include=${FEATURED_PRODUCT_ID}`);
      const data = await response.json();
      
      hideLoader(); // Hide loader after fetching featured product
      
      if (data.length > 0) {
        getElement("#featuredContainer").appendChild(createMovieCard(data[0], true));
      } else {
        console.error("Featured product not found in API response.");
      }
    } catch (error) {
      console.error("Error fetching featured product:", error);
      hideLoader(); // Make sure to hide the loader in case of an error
    }
  };
  
document.addEventListener("DOMContentLoaded", () => {
  fetchMovies();
  fetchFeaturedProduct();
});
