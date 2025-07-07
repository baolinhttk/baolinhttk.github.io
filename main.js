// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const cartCount = document.querySelector('.cart-count');
        let currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
        
        // Add animation effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Show feedback
        this.textContent = 'Đã thêm!';
        setTimeout(() => {
            this.textContent = 'Thêm vào giỏ hàng';
        }, 1000);
    });
});

// Search functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-input').value;
    if (searchTerm) {
        alert(`Đang tìm kiếm: ${searchTerm}`);
    }
});

// Enter key search
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        if (searchTerm) {
            alert(`Đang tìm kiếm: ${searchTerm}`);
        }
    }
});

// Smooth scrolling for CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#products').scrollIntoView({
        behavior: 'smooth'
    });
});

// Mobile menu toggle (basic implementation)
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});