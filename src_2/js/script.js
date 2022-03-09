$(function($){
	$('.mob_menu').click(function(){
		$('.header_menu').slideToggle();
		$('.dark_show').show();
	})

	$('.dark_show').click(function(){
		$('.header_menu').slideToggle();
		$('.dark_show').hide();
	})

	$('.more_all').click(function(){
		$('.price').addClass('active');
		$(this).hide();
	})
})

function readMore() {
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");

	if(dots.style.display === "none") {
		dots.style.display="inline";
		btn.innerHTML="Показать полностью";
		$('.bio_info #btn').removeClass('hide');
		more.style.display="none";
			console.log('ok');
		    $('html, body').animate({
		        scrollTop: $(".bio_info").offset().top 
		    }, 1);

	} else {
		dots.style.display="none";
		btn.innerHTML="Скрыть";
		$('.bio_info #btn').addClass('hide');
		more.style.display="inline";
		}
}

/*slick*/
$(document).ready(function(){
  $('.photo-slider').slick({
  	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	arrows:true,
  	responsive: [
  	   {
  	     breakpoint: 1200,
  	     settings: {
  	       slidesToShow: 2,
  	       slidesToScroll: 1,
  	       infinite: true,
           dots: true,
  	     }
  	   },
  	   {
  	     breakpoint: 991,
  	     settings: {
  	       slidesToShow: 2,
  	       slidesToScroll: 1,
  	       dots: true,
  	     }
  	   },
  	   {
  	     breakpoint: 768,
  	     settings: {
  	       slidesToShow: 1,
  	       slidesToScroll: 1,
  	       dots: true,
  	     }
  	   },
  	   {
  	     breakpoint: 576,
  	     settings: {
  	       slidesToShow: 1,
  	       slidesToScroll: 1,
  	       dots: true,
  	     }
  	   },
  	 ]
  });
});


$(document).ready(function(){
  /*$('.reviews_slider').slick({
  	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	responsive: [
  	   {
  	     breakpoint: 991,
  	     settings: {
  	       slidesToShow: 2,
  	       slidesToScroll: 1,
  	       infinite: true,
  	       dots: true,
  	     }
  	   },
  	   {
  	     breakpoint: 576,
  	     settings: {
  	       slidesToShow: 1,
  	       slidesToScroll: 1,
  	       dots: true,
  	     }
  	   },
  	 ]
  });*/
  $('.reviews_slider').slick({
      autoplay: false,
      dots: false,
      infinite: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
         {
           breakpoint: 1400,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
             infinite: true,
             dots: false,
             arrows: true,
           }
         },
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
             infinite: true,
             dots: true,
           }
         },
         {
           breakpoint: 991,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
             dots: true,
           }
         },
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             dots: true,
           }
         },
       ],
    rows: 0
  });

  $('.gallery_slider').slick({
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	adaptiveHeight:true,
  	responsive: [
  	   {
  	     breakpoint: 991,
  	     settings: {
  	       dots:true,
  	     }
  	   },
  	 ]
  });
  $('.paint_price').slick({
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	adaptiveHeight:true,
  	dots:true,
  });
  $('.advan_mob').slick({
  	infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	adaptiveHeight:true,
  	dots:true,
  });

  $(".gallery_block").each(function(){
  	$(this).magnificPopup({
  		type:'image',
  		delegate: '.gal_popup',
  		gallery: {
  			enabled:true
  		} 
  	});
  })

  $(".photo_popup").magnificPopup({
  	type:'image',
  	gallery: {
  		enabled: true
  	}
  })

  $('.header_list-close').on('click', function(event) {
    event.preventDefault();
    $('.header_menu').fadeOut();
  });

  var height = $('.reviews .slick-track').height();
  $('.reviews_block').height(height);


  /*$('.reviews_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
       {
         breakpoint: 991,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           infinite: true,
           dots: true,
         }
       },
       {
         breakpoint: 576,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           dots: true,
         }
       },
     ]
  });*/
});



