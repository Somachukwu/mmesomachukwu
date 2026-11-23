$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    $('.popup-image').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      },
      callbacks: {
        open: function() {
          if (document.activeElement && typeof document.activeElement.blur === 'function') {
            document.activeElement.blur();
          }
        },
        close: function() {
          $('.popup-image, .projects-image, .projects-thumb').blur();
          if (document.activeElement && typeof document.activeElement.blur === 'function') {
            document.activeElement.blur();
          }
        },
        afterClose: function() {
          $('.popup-image, .projects-image, .projects-thumb').blur();
          if (document.activeElement && typeof document.activeElement.blur === 'function') {
            document.activeElement.blur();
          }
        }
      }
    });
  };
  
  // Call the functions 
  magnifPopup();

  // Prevent persistent focus ring after clicking or viewing image
  $('.popup-image').on('click mouseup', function() {
    var $el = $(this);
    setTimeout(function() {
      $el.blur();
      $el.find('img').blur();
      $el.closest('.projects-thumb').blur();
    }, 50);
  });

});