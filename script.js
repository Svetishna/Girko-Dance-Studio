/* $('.teachers__item').addClass('hide');
$('.teachers__item').eq(0).removeClass('hide');

$('.teachers__nav li').eq(0).find('a').addClass('active');
$('.teachers__nav a').click(function(e){
  e.preventDefault()
  $('.teachers__nav a').removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('href');
  $(id).removeClass('hide').siblings('div').addClass('hide');
}) */





(function($){
  $('.teachers').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
	

})(jQuery);
