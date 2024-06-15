document.addEventListener('DOMContentLoaded', function() {
    // Get all toggleReadMore elements
    const toggleReadMoreLinks = document.querySelectorAll('.toggleReadMore');

    toggleReadMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const readMoreContent = this.closest('.card').querySelector('.readMoreContent');
            readMoreContent.classList.toggle('open');
            this.textContent = readMoreContent.classList.contains('open') ? 'Read less' : 'Read more';
        });
    });
});