$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {

	if( $("#nav").length > 0 ) {

        $("#nav").swipe({

            swipe:function(event, direction) {

                if(direction == "left") {

                    $("#nav").animate({
                        "left" : -100 + "%"
                    }, 300);

                }

            }

        });

    }

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
    });

});

