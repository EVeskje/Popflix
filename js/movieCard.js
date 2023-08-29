export const createMovieCard = (movie, isFeatured = false) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
  
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
  
  const createDivElement = (className, textContent = "") => {
    const divElement = document.createElement("div");
    divElement.className = className;
    divElement.textContent = textContent;
    return divElement;
  };
  