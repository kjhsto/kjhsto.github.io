$(function() {
  $("#open").click(function() {
    $("#menu").slideToggle(300);
    $("#open-icon").toggleClass("close");
    return false;
  });
  $(window).resize(function() {
    var menu = $('#menu');
    var w = window.innerWidth ? window.innerWidth : $(window).width();
    if (w > 480 && menu.is(':hidden')) {
      menu.attr('style', '');
    }
  });
});