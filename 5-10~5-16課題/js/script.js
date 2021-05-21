$(function () {
  $('.Toggle').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $('.NavMenu').addClass('active');
        $('body').addClass('no-scroll');
        $('.NavMenu').fadeIn(500);
    } else {
        $('.NavMenu').removeClass('active');
        $('body').removeClass('no-scroll');
        $('.NavMenu').fadeOut(500);
    }
  });

  $('.navmenu-a').click(function () {
    $('.NavMenu').removeClass('active');
    $('body').removeClass('no-scroll');
    $('.NavMenu').fadeOut(1000);
    $('.Toggle').removeClass('active');
  });

  $('#items-top-right-bg').hover(function(){
    $('.items-top-item').toggleClass('items-top-right');
  });

});