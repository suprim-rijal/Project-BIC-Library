document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .stat-card, .portal-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Counter animation for stats
    const animateCounters = () => {
        const booksCount = document.getElementById('booksCount');
        const usersCount = document.getElementById('usersCount');
        const statCard = document.querySelector('.stat-card');
        
        if (statCard && booksCount && usersCount) {
            const statCardPosition = statCard.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (statCardPosition < screenPosition) {
                animateValue(booksCount, 0, 10000, 2000);
                animateValue(usersCount, 0, 300, 2000);
            }
        }
    };
    
    // Initial check
    animateCounters();
    
    // Check on scroll
    window.addEventListener('scroll', animateCounters);
    
    // Counter animation function
    function animateValue(element, start, end, duration) {
        if (element.innerHTML.includes('+')) return; // Don't animate if already done
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.innerHTML = value.toLocaleString() + '+';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
});

        // Counter Animation for Stats
        const animateCounters = () => {
            const counters = [
                { element: document.getElementById('booksCount'), target: 1500, duration: 2000 },
                { element: document.getElementById('usersCount'), target: 400, duration: 2000 },
                
            ];
            
            counters.forEach(counter => {
                const start = 0;
                const increment = counter.target / (counter.duration / 16);
                let current = start;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < counter.target) {
                        counter.element.textContent = Math.floor(current).toLocaleString() + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.element.textContent = counter.target.toLocaleString() + '+';
                    }
                };
                
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        updateCounter();
                        observer.unobserve(counter.element);
                    }
                });
                
                observer.observe(counter.element);
            });
        };
        
        // Initialize counters when the stats section is in view
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entries[0].target);
            }
        }, { threshold: 0.5 });
        
        const statsSection = document.querySelector('.stats-container');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }