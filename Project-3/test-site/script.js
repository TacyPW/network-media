$(function() {
    $("#header").load("header.html", function() {
      var $navbar = $('.navbar');
      var $menu = $('.menu');
  
      // Toggle menu open/close when hamburger is clicked
      $navbar.on('click', '.hamburger', function() {
        $menu.toggleClass('open');
      });
  
      // Close menu when a menu item is clicked
      $menu.on('click', 'a', function() {
        $menu.removeClass('open');
      });
    });
  });