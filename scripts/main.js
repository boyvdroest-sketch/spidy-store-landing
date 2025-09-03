document.addEventListener('DOMContentLoaded', function() {
    const discountElement = document.getElementById('discount');
    const products = [
        { name: 'Flights', originalPrice: 200, discountedPrice: 100 },
        { name: 'Hotels', originalPrice: 150, discountedPrice: 75 },
        { name: 'Car Rentals', originalPrice: 80, discountedPrice: 40 },
        { name: 'Bill Payments', originalPrice: 50, discountedPrice: 25 }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${product.name}: <span class="original-price">$${product.originalPrice}</span> <span class="discounted-price">$${product.discountedPrice}</span>`;
        productList.appendChild(listItem);
    });

    discountElement.innerText = '50% OFF on all products!';
});