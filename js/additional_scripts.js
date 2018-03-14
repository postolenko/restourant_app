$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	// $("select").each(function() {

	// 	$(this).select2({
	// 		minimumResultsForSearch: Infinity
	// 	});

	// });

	$(".slider_1").on("init", function() {

		var sliderName = $(this).attr("data-slider");

		if( $(this).find(".slick-arrow").length > 0 ) {

			var prevArrow = $(this).find(".slick-prev");
			var nextArrow = $(this).find(".slick-next");

			$("[data-slider-arrows = '"+ sliderName +"']").append(prevArrow);
			$("[data-slider-arrows = '"+ sliderName +"']").append(nextArrow);

		}

	});

	$(".slider_1").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        // fade: true
    });

    // ------------------------------------

   	$(".slider_2").on("init", function() {

		var sliderName = $(this).attr("data-slider");

		if( $(this).find(".slick-arrow").length > 0 ) {

			var prevArrow = $(this).find(".slick-prev");
			var nextArrow = $(this).find(".slick-next");

			$("[data-slider-arrows = '"+ sliderName +"']").append(prevArrow);
			$("[data-slider-arrows = '"+ sliderName +"']").append(nextArrow);

		}

	});

	$(".slider_2").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        // fade: true
    });

});

