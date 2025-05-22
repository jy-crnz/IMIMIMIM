
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    
    if (splashScreen) {
        setTimeout(function() {
            splashScreen.style.opacity = '0';
            
            setTimeout(function() {
                splashScreen.style.display = 'none';
                document.body.classList.add('content-loaded');
            }, 500);
        }, 1000); 
    }

    initBackToTop();
    loadFeaturedProducts();
});

function initBackToTop() {
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        
        if (backToTopButton) {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
    });

    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

function loadFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products');
    
    if (featuredProductsContainer) {
        featuredProductsContainer.innerHTML = '';
        
        const sampleProducts = [
            {
                id: 1,
                name: "Wireless Headphones",
                brand: "SoundWave",
                price: 2499.99,
                image: "assets/images/product-placeholder.jpg",
                inStock: true
            },
            {
                id: 2,
                name: "Smart Watch",
                brand: "TechGear",
                price: 3999.99,
                image: "assets/images/product-placeholder.jpg",
                inStock: true
            },
            {
                id: 3,
                name: "Laptop Sleeve",
                brand: "ProtectCase",
                price: 999.99,
                image: "assets/images/product-placeholder.jpg",
                inStock: false
            },
            {
                id: 4,
                name: "Bluetooth Speaker",
                brand: "AudioMax",
                price: 1499.99,
                image: "assets/images/product-placeholder.jpg",
                inStock: true
            }
        ];
        
        // Generate product cards
        sampleProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-4 col-lg-3 mb-4';
            productCard.setAttribute('data-aos', 'fade-up');
            productCard.setAttribute('data-aos-delay', (index + 1) * 100);
            
            productCard.innerHTML = `
                <div class="card h-100 product-card">
                    <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${product.name}</h5>
                        <p class="card-text">
                            <span class="text-muted">${product.brand}</span><br>
                            <span class="fw-bold text-primary">₱${product.price.toFixed(2)}</span>
                        </p>
                    </div>
                    <div class="card-footer bg-white border-top-0">
                        <div class="d-flex justify-content-between">
                            <a href="product/details.php?id=${product.id}" class="btn btn-sm btn-primary">View Details</a>
                            ${product.inStock ? 
                            `<a href="cart/add.php?id=${product.id}&qty=1" class="btn btn-sm btn-success">
                                <i class="fas fa-cart-plus"></i>
                            </a>` : 
                            `<span class="badge bg-danger">Out of Stock</span>`}
                        </div>
                    </div>
                </div>
            `;
            
            featuredProductsContainer.appendChild(productCard);
        });
    }
}