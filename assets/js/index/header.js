document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('.navbar-list li a');

    menuIcon.addEventListener('click', function () {
        menu.classList.add('open')
    });

    closeIcon.addEventListener('click', function () {
        menu.classList.remove('open')
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('open')
        });
    });
});