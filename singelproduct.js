const API_URL = "https://www.eirikveskje.com/wp-json/wc/v3/products/";
const CONSUMER_KEY = "ck_b5877d7b70a5804f0ad7e9289848c8613753495b";
const CONSUMER_SECRET = "cs_b9042d621a1673ff92a770a2094124ab3c2148f0";
const PRODUCT_ID = 2163;

async function fetchSingleProduct(productId) {
  try {
    const response = await fetch(`${API_URL}${productId}?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`);
    const product = await response.json();
    console.log("Fetched product:", product);

  
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}

fetchSingleProduct(PRODUCT_ID);
