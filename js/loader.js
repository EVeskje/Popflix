export const showLoader = () => {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    document.body.appendChild(loader);
  }
  
  export const hideLoader = () => {
    const loader = document.querySelector(".loader");
    if (loader) {
      loader.remove();
    }
  }
  