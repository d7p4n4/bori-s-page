window.onload = function() {
  
  $('.btn').on('click', function() {

var btnClass = $(this).attr("rel");
    $(this).addClass('active');
    $('.' + btnClass).slideDown(800, function() {
      $(this).addClass('active');
    $('header').addClass('hidden');
  });
  });
}
