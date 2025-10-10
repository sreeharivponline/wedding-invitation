// Countdown Timer
function updateCountdown() {
    // Wedding date: December 14, 2025 at 9:30 AM (Muhurtham time)
    const weddingDate = new Date('2025-12-14T09:30:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (daysElement) daysElement.textContent = days >= 0 ? days : 0;
    if (hoursElement) hoursElement.textContent = hours >= 0 ? hours : 0;
    if (minutesElement) minutesElement.textContent = minutes >= 0 ? minutes : 0;
    if (secondsElement) secondsElement.textContent = seconds >= 0 ? seconds : 0;

    // If the countdown is finished
    if (distance < 0) {
        const countdownContainer = document.querySelector('.countdown-container');
        if (countdownContainer) {
            countdownContainer.innerHTML = `
                <div class="countdown-title">🎉 The Wedding Day Has Arrived! 🎉</div>
                <div style="font-family: 'Dancing Script', cursive; font-size: 2rem; color: #a0522d; margin-top: 1rem;">
                    Congratulations Divya & Harikrishnan!
                </div>
            `;
        }
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown on page load
document.addEventListener('DOMContentLoaded', updateCountdown);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation visibility and scroll effects
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (navbar && heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Hide navbar when in hero section, show when scrolled past it
        if (scrollPosition < heroHeight - 100) {
            navbar.style.transform = 'translateY(-100%)';
            navbar.style.opacity = '0';
        } else {
            navbar.style.transform = 'translateY(0)';
            navbar.style.opacity = '1';
            
            // Change background opacity based on scroll
            if (scrollPosition > heroHeight) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        }
        
        // Show/hide back to top button
        if (backToTopBtn) {
            if (scrollPosition > heroHeight / 2) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    }
});

// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Add entrance animations when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and timeline items
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.celebration-card, .couple-card, .timeline-item, .venue-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add sparkle effect on hero section
function createSparkle() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        pointer-events: none;
        animation: sparkleAnimation 3s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        z-index: 3;
    `;
    
    hero.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Create sparkles periodically
setInterval(createSparkle, 1500);

// Add heart floating animation
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.cssText = `
        position: fixed;
        font-size: 20px;
        pointer-events: none;
        z-index: 9999;
        animation: floatHeart 4s linear infinite;
        left: ${Math.random() * 100}vw;
        bottom: -50px;
    `;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Add heart floating animation CSS
const heartStyle = document.createElement('style');
heartStyle.textContent = `
    @keyframes floatHeart {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartStyle);

// Create floating hearts occasionally
setInterval(createHeart, 5000);

// Interactive Touch Effects - Flying Hearts and Flowers
function createTouchEffect(x, y) {
    const effects = ['💕', '💖', '🌸', '🌺', '🌻', '🌼', '💐', '🌹', '💒', '✨'];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    
    const element = document.createElement('div');
    element.innerHTML = randomEffect;
    element.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: ${Math.random() * 20 + 15}px;
        pointer-events: none;
        z-index: 10000;
        user-select: none;
        animation: touchEffectFloat ${Math.random() * 2 + 2}s ease-out forwards;
        transform-origin: center;
    `;
    
    document.body.appendChild(element);
    
    setTimeout(() => {
        if (element.parentNode) {
            element.remove();
        }
    }, 4000);
}

// Add touch effect animation CSS
const touchEffectStyle = document.createElement('style');
touchEffectStyle.textContent = `
    @keyframes touchEffectFloat {
        0% {
            opacity: 1;
            transform: scale(0) translateY(0) rotate(0deg);
        }
        10% {
            opacity: 1;
            transform: scale(1.2) translateY(-10px) rotate(45deg);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-100px) rotate(${Math.random() * 360}deg);
        }
    }
`;
document.head.appendChild(touchEffectStyle);

// Add event listeners for touch and click
document.addEventListener('click', function(e) {
    // Don't trigger on navigation links and buttons
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('nav') || e.target.closest('.cta-button') || e.target.closest('.map-link')) {
        return;
    }
    
    createTouchEffect(e.clientX, e.clientY);
});

document.addEventListener('touchstart', function(e) {
    // Don't trigger on navigation links and buttons
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('nav') || e.target.closest('.cta-button') || e.target.closest('.map-link')) {
        return;
    }
    
    // Create effect for each touch point
    for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        createTouchEffect(touch.clientX, touch.clientY);
    }
});

// Multi-touch burst effect
document.addEventListener('touchend', function(e) {
    if (e.changedTouches.length > 1) {
        // Create a burst of effects for multi-touch
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * window.innerHeight;
                createTouchEffect(randomX, randomY);
            }, i * 100);
        }
    }
});

// Add click effect to buttons
document.querySelectorAll('.cta-button, .map-link').forEach(button => {
    button.addEventListener('click', function(e) {
        // Don't add ripple effect for external links
        if (this.getAttribute('href') && this.getAttribute('href').startsWith('http')) {
            return;
        }
        
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: rippleEffect 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
