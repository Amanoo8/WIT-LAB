const API = "https://dummyjson.com/products?limit=10";

const productsContainer =
    document.querySelector("#products-container");

async function fetchProducts() {
    try {
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        renderProducts(data.products);

    } catch (error) {
        productsContainer.innerHTML =
            `<p>Error: ${error.message}</p>`;
    }
}

function renderProducts(products) {

    productsContainer.innerHTML = "";

    products.forEach(product => {

        const article = document.createElement("article");

        article.className = "product";

        article.innerHTML = `
            <img src="${product.thumbnail}"
                 alt="${product.title}">

            <h2>${product.title}</h2>

            <p>${product.description}</p>

            <p class="price">
                Price: $${product.price}
            </p>
        `;

        productsContainer.appendChild(article);
    });
}

fetchProducts();