// Dummy data for products (replace with your actual data)
const products = [
    { name: 'Product 1', price: 19.99 },
    { name: 'Product 2', price: 29.99 },
    { name: 'Product 3', price: 39.99 },
];

// Function to generate product cards
function generateProductCards() {
    const productsSection = document.getElementById('products');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        `;

        productsSection.appendChild(card);
    });
}

// Call the function to generate product cards when the page loads
window.onload = generateProductCards;
