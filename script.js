window.onload = function() {
  
  $('.btn').on('click', function() {

var btnClass = $(this).attr("rel");
    $(this).addClass('active');
    $('.' + btnClass).slideDown(200, function() {
      $(this).addClass('active');
    $('header').addClass('hidden');
  });
  });
  
  $('.back').on('click', function(){
    var btnBack = $(this).attr('rel');
    $('.' + btnBack).slideUp(2000, function() {
      $(this).removeClass('active');
      $('header').removeClass('hidden');
      
    })
  })
}
