document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const sections = document.querySelectorAll('.card');
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });
});