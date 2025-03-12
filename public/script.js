// Sample product data
const products = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: 'https://via.placeholder.com/150' },
];

// Render products
const productList = document.querySelector('.product-list');
products.forEach((product) => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p>Price: $${product.price}</p>
    <button>Add to Cart</button>
  `;
  productList.appendChild(productCard);
});
