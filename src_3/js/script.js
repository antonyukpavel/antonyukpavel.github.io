$(function($){
	$('.mob_menu').click(function(){
		$('.header_menu').slideToggle();
	})
	$('.header_list_close').click(function(){
		$('.header_menu').slideToggle();
	})

	$('.mob').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '30px',
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight:true,
	});
})