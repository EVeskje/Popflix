# Popflix

<h1>Goal</h1>
Use your knowledge of WordPress content management to setup an API for consumption in your cross-course project.

<h2>Brief</h2>
In this assignment, you’ll be using the WordPress REST API to manage the products for your website deployed on Netlify. Instead of having the products hardcoded into the HTML, you will use JavaScript to fetch the list of WordPress products and display them on your site.

There are two distinct aspects to this assignment:

Setup and configure a headless WordPress + WooCommerce API
Fetch this API as a data source and display it as part of your cross-course project
This means that there is no requirement to do theming work in PHP, since WordPress is only providing API access.

<h3>Level 1 Process</h3>
<h4>Setup a WordPress instance</h4>
1. Install WordPress locally using your preferred tool
2. Install and configure the WooCommerce plugin
3. Add at least 5 products to WooCommerce
4. Designate at least 1 product as Featured
5. Create a Noroff admin user with a strong, unique password
6. Deploy your WordPress instance to a remote host (Optional, Recommended, *)

<h4>Implement WordPress API using JavaScript</h4>
1. Create JavaScript to fetch an array of product data from WordPress API
2. Create JavaScript functionality to fetch a single product’s data from WordPress API
3. Create JavaScript functionality to render a grid of product data in HTML as thumbnails
4. Filter Featured products from the list and show these in their own section
5. Create a Product Detail page that uses an id search parameter render a single product’s data
6. Make sure that all changes to your project are committed and pushed
7. Deploy your cross-course project to Netlify (Optional, Recommended, *)