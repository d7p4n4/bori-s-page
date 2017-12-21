window.onload = function() {
  
  $('.btn').on('click', function() {
    
    $('.btns div.active').removeClass('active');

var btnClass = $(this).attr("rel");
    
    $(this).addClass('active');
    $('.' + btnClass).slideDown(1000, function() {
      $(this).addClass('active');
    });
      $('header').slideUp(1000, function() {
        $('header').addClass('hidden');
  });
    $('div.wrapper.active').slideUp(1000, function() {
      $(this).removeClass('active');
    });
    
  });
  
  $('.back').on('click', function(){
    var btnBack = $(this).attr('rel');
    $('.' + btnBack).slideUp(1000, function() {
      $(this).removeClass('active');
    });
    $('header').slideDown(1000, function() {
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
