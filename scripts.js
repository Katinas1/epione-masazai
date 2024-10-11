document.querySelectorAll('.link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(`[data-section="${this.getAttribute('data-target')}"]`);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
