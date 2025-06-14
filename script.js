// Mobile menu
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('active');
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu after click
        document.querySelector('.mobile-menu-btn').classList.remove('active');
        document.querySelector('nav').classList.remove('active');
    });
});

// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Auto slide change
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Form submission
document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would normally send the form data to a server
    // For demo purposes, we'll just show an alert
    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    
    // Reset the form
    this.reset();
});

// Parallax effect
window.addEventListener('scroll', function() {
    const parallax = document.getElementById('parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

function animateEqualizer() {
    const bars = document.querySelectorAll('.equalizer .bar');
    const animations = [
        { height: '10px', delay: '0s' },
        { height: '25px', delay: '0.2s' },
        { height: '40px', delay: '0.4s' },
        { height: '15px', delay: '0.1s' },
        { height: '30px', delay: '0.3s' }
    ];
    
    bars.forEach((bar, index) => {
        const anim = animations[index % animations.length];
        bar.style.height = anim.height;
        bar.style.animationDelay = anim.delay;
    });
    
    setTimeout(animateEqualizer, 1000);
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    animateEqualizer();
});

// Анимация увеличения при скролле
document.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroHeight = hero.offsetHeight;
    const scrollPosition = window.pageYOffset;
    
    // Коэффициент увеличения (можно настроить)
    const scale = 1 + Math.min(scrollPosition / 1000, 0.3);
    
    heroContent.style.transform = `scale(${scale})`;
    
    // Параллакс-эффект для фона
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

