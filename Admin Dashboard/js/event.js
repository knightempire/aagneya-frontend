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