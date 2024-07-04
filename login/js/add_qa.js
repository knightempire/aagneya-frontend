$(document).ready(function() {
  var $steps = $('.step');
  var $activeLine = $('.active-line');
  var totalSteps = $steps.length;
  var currentStep = 1;
  var sliderWidth = $('.steps-container').width();

  // Object to store form data
  var formData = {};

  $('.next').click(function(e) {
    e.preventDefault();
    var $currentForm = $(this).closest('.slider-form');
    var $nextForm = $currentForm.next('.slider-form');

    // Check if the input field is valid
    var $inputField = $currentForm.find('input[required]');
    if ($inputField.val() === '') {
      $currentForm.find('.validation-message').fadeIn().delay(2000).fadeOut();
      return;
    }

    // Store input value in formData object
    var inputName = $inputField.attr('placeholder');
    formData[inputName] = $inputField.val();

    if ($nextForm.length > 0) {
      $currentForm.removeClass('active');
      $nextForm.addClass('active');
      currentStep++;
      updateSlider();
    }

    // Log formData to console
    console.log(formData);
  });

  $('.submit').click(function() {
    console.log('Final form data:', formData);
  });

  function updateSlider() {
    var stepWidth = (currentStep - 1) * (sliderWidth / (totalSteps - 1));
    $activeLine.css('width', stepWidth + 'px');
    $steps.removeClass('active');
    $steps.eq(currentStep - 1).addClass('active');
  }

  $(window).resize(function() {
    sliderWidth = $('.steps-container').width();
    updateSlider();
  });
});