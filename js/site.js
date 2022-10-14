jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#submit').hover(function() {
    $("#input-submit input").addClass('active');
  }, function() {
    $("#input-submit input").removeClass('active');
  });
});