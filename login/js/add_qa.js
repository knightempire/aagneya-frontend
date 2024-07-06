document.addEventListener("DOMContentLoaded", function() {
  var steps = document.querySelectorAll('.step');
  var activeLine = document.querySelector('.active-line');
  var totalSteps = steps.length;
  var currentStep = 1;
  var sliderWidth = document.querySelector('.steps-container').offsetWidth;

  // Object to store form data
  var formData = {};

  document.querySelectorAll('.next').forEach(function(nextButton) {
    nextButton.addEventListener('click', function(e) {
      e.preventDefault();
      var currentForm = this.closest('.slider-form');
      var nextForm = currentForm.nextElementSibling;

      // Check if the input field is valid
      var inputField = currentForm.querySelector('input[required]');
      if (inputField.value === '') {
        currentForm.querySelector('.validation-message').style.display = 'block';
        setTimeout(function() {
          currentForm.querySelector('.validation-message').style.display = 'none';
        }, 2000);
        return;
      }

      // Store input value in formData object
      var inputName = inputField.getAttribute('placeholder');
      formData[inputName] = inputField.value;

      if (nextForm && nextForm.classList.contains('slider-form')) {
        currentForm.classList.remove('active');
        nextForm.classList.add('active');
        currentStep++;
        updateSlider();
      }

      // Log formData to console
      console.log(formData);
    });
  });

  document.querySelector('.submit').addEventListener('click', function() {
    console.log('Final form data:', formData);
  });

  function updateSlider() {
    var stepWidth = (currentStep - 1) * (sliderWidth / (totalSteps - 1));
    activeLine.style.width = stepWidth + 'px';
    steps.forEach(function(step, index) {
      step.classList.toggle('active', index === currentStep - 1);
    });
  }

  window.addEventListener('resize', function() {
    sliderWidth = document.querySelector('.steps-container').offsetWidth;
    updateSlider();
  });
});
