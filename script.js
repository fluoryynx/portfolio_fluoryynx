// DOM Content Loaded event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Add active state to navigation when scrolling
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]'); 
    for (const link of links) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate when scrolled into view
    document.querySelectorAll('.section, .timeline-item, .project-item, .education-item, .skill-category').forEach(el => {
        observer.observe(el);
    });
    
    // Add animation classes
    document.querySelectorAll('.section, .timeline-item, .project-item, .education-item, .skill-category').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add animated class for CSS animations
    const animatedElements = document.querySelectorAll('.section, .timeline-item, .project-item, .education-item, .skill-category');
    animatedElements.forEach(el => {
        el.classList.add('animate-in');
    });
    
    // Fade-in animation for subtitle
    const subtitleElement = document.querySelector('.subtitle');
    if (subtitleElement) {
        // Add the fade-in animation class to make the whole paragraph appear immediately
        subtitleElement.classList.add('fade-in-animation');
    }
    
    // Nyan Cat Easter Egg - Click to make it move
    const nyanCat = document.querySelector('.nyan-cat-experience');
    if (nyanCat) {
        nyanCat.addEventListener('click', function() {
            // Create a fun animation where the cat moves to a random position
            const maxX = window.innerWidth - nyanCat.offsetWidth;
            const maxY = window.innerHeight - nyanCat.offsetHeight;
            
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;
            
            // Add animation class
            nyanCat.style.position = 'fixed';
            nyanCat.style.transition = 'all 0.8s ease';
            nyanCat.style.left = newX + 'px';
            nyanCat.style.top = newY + 'px';
            
            // Add a fun effect to show it was clicked
            nyanCat.style.transform = 'rotate(360deg)';
            
            // Reset transform after animation completes
            setTimeout(() => {
                nyanCat.style.transform = 'rotate(0deg)';
            }, 800);
        });
        
        // Double click to reset position
        nyanCat.addEventListener('dblclick', function() {
            nyanCat.style.position = 'relative';
            nyanCat.style.left = '';
            nyanCat.style.top = '';
            nyanCat.style.transition = '';
            nyanCat.style.transform = 'rotate(0deg)';
        });
    }
    
    // Add Konami Code Easter Egg (up, up, down, down, left, right, left, right, b, a)
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateKonamiEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function activateKonamiEasterEgg() {
        // Create a fun animation for the entire page
        document.body.style.animation = 'rainbow 0.5s infinite';
        
        // Add rainbow animation to CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
            .rainbow-mode {
                animation: rainbow 0.5s infinite !important;
            }
        `;
        document.head.appendChild(style);
        
        // Show a fun message
        const easterEggMessage = document.createElement('div');
        easterEggMessage.textContent = '🎉 KONAMI CODE ACTIVATED! 🎉';
        easterEggMessage.style.position = 'fixed';
        easterEggMessage.style.top = '50%';
        easterEggMessage.style.left = '50%';
        easterEggMessage.style.transform = 'translate(-50%, -50%)';
        easterEggMessage.style.fontSize = '2rem';
        easterEggMessage.style.fontWeight = 'bold';
        easterEggMessage.style.color = '#ff6b6b';
        easterEggMessage.style.zIndex = '9999';
        easterEggMessage.style.textAlign = 'center';
        easterEggMessage.style.animation = 'bounce 0.5s infinite alternate';
        easterEggMessage.style.pointerEvents = 'none';
        
        // Add bounce animation
        const bounceStyle = document.createElement('style');
        bounceStyle.textContent = `
            @keyframes bounce {
                from { transform: translate(-50%, -50%) scale(1); }
                to { transform: translate(-50%, -50%) scale(1.1); }
            }
        `;
        document.head.appendChild(bounceStyle);
        
        document.body.appendChild(easterEggMessage);
        
        // Remove after 5 seconds
        setTimeout(() => {
            document.body.style.animation = '';
            easterEggMessage.remove();
            bounceStyle.remove();
            style.remove();
        }, 5000);
    }
    
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Hamburger menu animation */
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    
    /* Mobile menu */
    @media (max-width: 768px) {
        .hamburger {
            display: flex;
        }
        
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-link {
            padding: 1rem;
            display: block;
        }
    }
`;
document.head.appendChild(style);
