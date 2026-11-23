
  (function ($) {
  
  "use strict";

    // THEME TOGGLE (DARK / LIGHT MODE)
    function applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('theme', theme);
      } catch (e) {}

      var isDark = theme === 'dark';
      var $buttons = $('#theme-toggle, #theme-toggle-mobile');
      $buttons.each(function() {
        var $icon = $(this).find('i');
        if (isDark) {
          $icon.removeClass('bi-moon-stars').addClass('bi-sun');
          $(this).attr('aria-label', 'Switch to light mode').attr('title', 'Switch to light mode');
        } else {
          $icon.removeClass('bi-sun').addClass('bi-moon-stars');
          $(this).attr('aria-label', 'Switch to dark mode').attr('title', 'Switch to dark mode');
        }
      });
    }

    // Determine initial theme
    var savedTheme = null;
    try {
      savedTheme = localStorage.getItem('theme');
    } catch (e) {}

    var activeTheme = 'light';
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      activeTheme = 'dark';
    }
    applyTheme(activeTheme);

    $(document).on('click', '#theme-toggle, #theme-toggle-mobile', function(e) {
      e.preventDefault();
      var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      var nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


