// Enhanced smooth animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add a subtle parallax effect to the logo on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const logo = document.querySelector('.logo-container');
        
        if (logo) {
            const parallax = scrolled * 0.1;
            logo.style.transform = `translateY(${parallax}px)`;
        }
    });

    // Add click ripple effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // Style the ripple
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            // Add ripple to the link
            this.appendChild(ripple);
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation keyframes via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization: Use requestAnimationFrame for scroll events
let ticking = false;
function updateScrollEffect() {
    const scrolled = window.pageYOffset;
    const logo = document.querySelector('.logo-container');
    
    if (logo) {
        const parallax = scrolled * 0.1;
        logo.style.transform = `translateY(${parallax}px)`;
    }
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffect);
        ticking = true;
    }
});