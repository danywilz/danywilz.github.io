document.addEventListener('DOMContentLoaded', () => {
    const switchThemeButton = document.getElementById('switchTheme');
    const preloader = document.getElementById('preloader');

    // Switch Theme Functionality
    switchThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        console.log('Toggled light mode:', document.body.classList.contains('light-mode'));
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            switchThemeButton.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'dark');
            switchThemeButton.textContent = '🌙';
        }
    });

    // Load Theme from Local Storage
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        switchThemeButton.textContent = '☀️';
    }

    // Preloader
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // Smooth Scrolling
    document.querySelector('nav ul').addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Testimonials Slider
    const testimonials = document.querySelectorAll('.testimonials-slider .testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    setInterval(nextTestimonial, 3000); // Change testimonial every 3 seconds
    showTestimonial(currentTestimonial);
});
