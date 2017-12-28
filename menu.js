window.onload = function() {
  
  $('.btn').on('click', function() {
    
    $('.btns div.active').removeClass('active');
    $(this).addClass('active');

var btnClass = $(this).attr("rel");
    
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

/* pics */

var wHeight = $('.pics-cont').height();
  var pageNum = 1;
  var padding = parseInt($('.pics-cont').css('padding').replace('px', ''));
  
$('.next-btn').on('click', function() {
  pageNum++;
  $('.moving-wrapper').css('margin-top', '-=' + (wHeight + padding));
  $('.page-number').html(pageNum);
});
  
$('.previous-btn').on('click', function() {
  pageNum--;
  $('.moving-wrapper').css('margin-top', '+=' + (wHeight + padding));
   $('.page-number').html(pageNum);
})
  
  $('.pic-cont').on('click', function() {
   var picNum = $(this).attr('rel');
    
   $('.overlay').fadeIn(1000, function() {
      $(this).removeClass('overlay-hidden');
    })
    $('.' + picNum).css('display', 'flex');
  })
    
    
    $('.esc-btn').on('click', function() {
      $('.overlay').fadeOut(1000, function() {
        $(this).addClass('overlay-hidden');
      })
      $('.overlay-img').css('display', 'none');
    })
}