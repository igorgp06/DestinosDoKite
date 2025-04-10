document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-item .nav-link');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop();
        if (linkHref === currentPath) {
            link.parentElement.classList.add('active');
        }
        if (linkHref === '') {
            link.parentElement.classList.add('active');
        }
    });
});
