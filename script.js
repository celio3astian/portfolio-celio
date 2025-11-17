/**
 * Função para fazer scroll suave até uma seção
 * @param {string} sectionId - ID da seção para scroll
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
        section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    }
    }

/**
 * Função para destacar o link da navegação ativo ao fazer scroll
*/
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.topbar nav a');
    
    window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
    }
});

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
        }
    });
});
}

/**
 * Função para adicionar animação de fade-in ao carregar a página
 */
function animateOnLoad() {
    const elements = document.querySelectorAll('.section, .card, .hero-text');
    
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});
}

/**
 * Função para validar e copiar email ao clicar
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copiado para a área de transferência!');
    }).catch(err => {
    console.error('Erro ao copiar:', err);
});
}

/**
 * Inicializar tudo quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNavLink();
    animateOnLoad();
    
    console.log('✅ Portfólio carregado com sucesso!');
});

/**
 * Adicionar smooth scroll ao clicar em links de âncora
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    
    if (href !== '#') {
        e.preventDefault();
        scrollToSection(href.slice(1));
    }
});
});
