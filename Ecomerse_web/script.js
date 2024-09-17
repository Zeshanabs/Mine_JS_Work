// Fetch Clothes Products
async function fetchClothes() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/clothing'); // Simulated API endpoint
      const clothes = await response.json();
      displayProducts(clothes, 'clothes-products');
    } catch (error) {
      console.error('Error fetching clothes:', error);
    }
  }
  
  // Fetch Cats Products (Simulating Cats as Products)
  async function fetchCats() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/pets'); // Simulated API endpoint for pets
      const cats = await response.json();
      displayProducts(cats, 'cats-products');
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
  }
  
  // Display Products in Grid
  function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
      `;
  
      container.appendChild(productCard);
    });
  }
  
  // Initialize Product Fetching
  document.addEventListener('DOMContentLoaded', () => {
    fetchClothes();
    fetchCats();
  });
  