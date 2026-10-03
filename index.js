 
 const navbarToggle = document.querySelector('.navbar-toggle');
 const navbarMenu = document.querySelector('.navbar-menu');

 navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
 });
//  Bagian Smooth Scroll
const navLinks = document.querySelectorAll('.navbar-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
    });
});