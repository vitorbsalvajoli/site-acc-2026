// Smooth scroll para links internos
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

// Animação de fade-in ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação às seções
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Aplicar animação aos cards de detalhes
document.querySelectorAll('.detail-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Menu responsivo para mobile
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Criar botão hamburger
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.setAttribute('aria-label', 'Menu');
    
    // Adicionar estilos do hamburger
    hamburger.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--primary-color);
    `;
    
    nav.appendChild(hamburger);
    
    // Toggle menu no mobile
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Adicionar media query para mostrar hamburger no mobile
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .hamburger {
                display: block !important;
            }
            
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 1rem;
                gap: 1rem;
                display: none;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }
            
            .nav-links.active {
                display: flex;
            }
        }
    `;
    document.head.appendChild(style);
}

// Inicializar menu mobile
createMobileMenu();

// Efeito de scroll no header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Mensagem de boas-vindas no console
console.log('%c🏕️ Bem-vindo ao site do A.C.C. 2026!', 'font-size: 16px; font-weight: bold; color: #2d5a27;');
console.log('%cPrepare-se para uma aventura inesquecível!', 'font-size: 12px; color: #666;');