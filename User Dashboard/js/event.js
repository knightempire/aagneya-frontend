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


function showEditForm() {
    // Hide the element with id="displayallmembers"
    var displayallmembers = document.getElementById('displayallmembers');
    if (displayallmembers) {
        displayallmembers.style.display = 'none';
    }

    // Hide the element with id="allmember"
    var allmember = document.getElementById('allmember');
    if (allmember) {
        allmember.style.display = 'none';
    }

    // Show the form with id="editvent"
    var editForm = document.getElementById('editvent');
    if (editForm) {
        editForm.style.display = 'block';
    }
}


function closeForm() {
    // Show the element with id="displayallmembers"
    var displayallmembers = document.getElementById('displayallmembers');
    if (displayallmembers) {
        displayallmembers.style.display = 'block';
    }

    // Hide the form with id="editvent"
    var editForm = document.getElementById('editvent');
    if (editForm) {
        editForm.style.display = 'none';
    }
}