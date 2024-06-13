$(document).ready(function() {
    var $steps = $('.step');
    var $activeLine = $('.active-line');
    var totalSteps = $steps.length;
    var currentStep = 1;
    var sliderWidth = $('.steps-container').width();

    $('.next').click(function(e) {
      e.preventDefault();
      var $currentForm = $(this).closest('.slider-form');
      var $nextForm = $currentForm.next('.slider-form');

      // Check if the input field is valid
      if ($currentForm.find('input[required]').val() === '') {
        $currentForm.find('.validation-message').fadeIn().delay(2000).fadeOut();
        return;
      }

      if ($nextForm.length > 0) {
        $currentForm.removeClass('active');
        $nextForm.addClass('active');
        currentStep++;
        updateSlider();
      }
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