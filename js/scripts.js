$(window).load(function() {

    $("select").each(function() {

        var parentBlock = $(this).closest(".select-block");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

    getMeinNavHeight();

});

$(window).resize(function() {

    getMeinNavHeight();

});

$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;  


    $(".menu_btn").click(function(e) {

        e.preventDefault();

        if( $("#nav").offset().left >= 0 ) {

            $("#nav").animate({
                "left" : -100 + "%"
            }, 500);

        } else {

            $("#nav").animate({
                "left" : 0 + "%"
            }, 500);

        }

    });

    $(document).mouseup(function (e){

        var targetElem = $("#nav");

        if (!targetElem.is(e.target)
            && targetElem.has(e.target).length === 0
            && targetElem.offset().left >= 0 ) {

            $("#nav").animate({
                "left" : -100 + "%"
            }, 300);

        }

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27 &&
            $("#nav").offset().left >= 0 ) {

            $("#nav").animate({
                "left" : -100 + "%"
            }, 300);

        }

    });


});


function getMeinNavHeight() {

    $(".main-nav_wrapp").css({
        "height" : $(window).height() - $(".main-nav-header").outerHeight(true) + "px"
    });

}