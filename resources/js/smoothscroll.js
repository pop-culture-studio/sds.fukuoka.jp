document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(scroll => {
        scroll.addEventListener('click', (e) => {
            e.preventDefault();
            const href = scroll.getAttribute('href');

            const targetElement = href === '#' || 　href === '' ? document.getElementsByTagName('html')[0] : document.getElementById(href.replace('#', ''));

            const top = targetElement.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const gap = 0;
            const target = top + offset - gap;

            window.scrollTo({
                top: target,
                behavior: 'smooth',
            });
        });
    })
})