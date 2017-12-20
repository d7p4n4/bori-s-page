window.onload = function() {
  
  $('.btn').on('click', function() {

var btnClass = $(this).attr("rel");
    $(this).addClass('active');
    $('.' + btnClass).slideDown(2000, function() {
      $(this).addClass('active');
    });
    $('header').slideUp(2000, function() {
    $('header').addClass('hidden');
  });
  });
  
  $('.back').on('click', function(){
    var btnBack = $(this).attr('rel');
    $('.' + btnBack).slideUp(2000, function() {
      $(this).removeClass('active');
    });
    $('header').slideDown(2000, function() {
      $('header').removeClass('hidden');
      $('.btn').removeClass('active');
      
    })
  })
  
  /* slam */
  
    var sumClick = 0;
  
$('.info-btn').on('click', function() {
  var panelClass = $(this).attr('rel');
  
  if (sumClick === 0) {
    sumClick++
  $('.' + panelClass).slideDown(500, function() {
    $(this).addClass('active');
  });
  } else {
    sumClick--
  $('.' + panelClass).slideUp(500, function() {
    $(this).removeClass('active');
  });
  }
});
}
