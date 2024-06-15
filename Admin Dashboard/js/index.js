const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function(e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});




document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button, the form content, and the span element
    const addButton = document.querySelector('.report');
    const formContent = document.getElementById('formcontent');
    const separateContent = document.getElementById('seprate');
    const changesSpan = document.getElementById('changes');
    const closeIcon = addButton.querySelector('.bx.bxs-x-circle'); // Select the close icon

    // Initially hide the form content and show the separate content
    formContent.style.display = 'none';
    separateContent.style.display = 'block'; // Assuming separate content is initially visible

    // Add click event listener to the button
    addButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Toggle the visibility of the form content
        if (formContent.style.display === 'none') {
            // Show form content, hide separate content
            formContent.style.display = 'block';
            separateContent.style.display = 'none';
            changesSpan.textContent = 'Cancel'; // Change button text to "Cancel"
            closeIcon.style.display = 'inline-block'; // Show the close icon
            addButton.classList.add('active'); // Optional: Add a class to style the active state
        } else {
            // Hide form content, show separate content
            formContent.style.display = 'none';
            separateContent.style.display = 'block';
            changesSpan.textContent = 'Add'; // Change button text to "Add"
            closeIcon.style.display = 'none'; // Hide the close icon
            addButton.classList.remove('active'); // Optional: Remove the class to style the active state
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons and sections
    const viewAllBtn = document.getElementById('viewAllSectionBtn');
    const monitoredBtn = document.getElementById('monitoredSectionBtn');
    const unmonitoredBtn = document.getElementById('unmonitoredSectionBtn');

    const viewAllSection = document.getElementById('viewAllSection');
    const monitoredSection = document.getElementById('monitoredSection');
    const unmonitoredSection = document.getElementById('unmonitoredSection');

    // Function to hide all sections
    function hideAllSections() {
        viewAllSection.style.display = 'none';
        monitoredSection.style.display = 'none';
        unmonitoredSection.style.display = 'none';
    }

    // Function to deactivate all buttons
    function deactivateAllButtons() {
        viewAllBtn.classList.remove('active');
        monitoredBtn.classList.remove('active');
        unmonitoredBtn.classList.remove('active');
    }

    // Show the default section (View all) and mark its button as active on page load
    viewAllSection.style.display = 'flex';
    viewAllBtn.classList.add('active');

    // Add click event listeners to buttons
    viewAllBtn.addEventListener('click', function() {
        hideAllSections();
        viewAllSection.style.display = 'flex';
        deactivateAllButtons();
        viewAllBtn.classList.add('active');
    });

    monitoredBtn.addEventListener('click', function() {
        hideAllSections();
        monitoredSection.style.display = 'flex';
        deactivateAllButtons();
        monitoredBtn.classList.add('active');
    });

    unmonitoredBtn.addEventListener('click', function() {
        hideAllSections();
        unmonitoredSection.style.display = 'flex';
        deactivateAllButtons();
        unmonitoredBtn.classList.add('active');
    });
});