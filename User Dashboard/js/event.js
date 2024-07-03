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
    // Hide the element with id="displayevents"
    var displayEvents = document.getElementById('displayevents');
    if (displayEvents) {
        displayEvents.style.display = 'none';
    }

    // Show the form with id="editvent"
    var editForm = document.getElementById('editvent');
    if (editForm) {
        editForm.style.display = 'block';
    }
}

function closeForm() {
    // Show the element with id="displayevents"
    var displayEvents = document.getElementById('displayevents');
    if (displayEvents) {
        displayEvents.style.display = 'block';
    }

    // Hide the form with id="editvent"
    var editForm = document.getElementById('editvent');
    if (editForm) {
        editForm.style.display = 'none';
    }
}