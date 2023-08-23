const API_URL = "https://www.eirikveskje.com/wp-json/wc/v3/products/";
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const getElement = (selector) => document.querySelector(selector);
const createDivElement = (className, textContent = "") => {
  const divElement = document.createElement("div");
  divElement.className = className;
  divElement.textContent = textContent;
  return divElement;
};

const fetchProductDetails = async (productId) => {
  try {
    const headers = new Headers({
      Authorization: `Basic ${btoa("ck_b5877d7b70a5804f0ad7e9289848c8613753495b:cs_b9042d621a1673ff92a770a2094124ab3c2148f0")}`,
    });

    const response = await fetch(`${API_URL}${productId}`, { headers });
    const data = await response.json();

    const productCard = createProductCard(data);
    getElement("#productContainer").appendChild(productCard);
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
};

const createProductCard = (product) => {
    const productCard = createDivElement("product-card");
  
    const productImage = new Image();
    productImage.src = product.images[0].src;
  
    const productName = createDivElement("product-name", product.name);
    const productPrice = createDivElement("product-price", `Price: $${product.price}`);
    
    // Set innerHTML directly to include HTML tags
    const productDescription = createDivElement("product-description");
    productDescription.innerHTML = product.description;
  
    [productImage, productName, productPrice, productDescription].forEach((element) =>
      productCard.appendChild(element)
    );
  
    return productCard;
  };

document.addEventListener("DOMContentLoaded", () => {
  fetchProductDetails(productId);
});
