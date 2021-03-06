$(document).ready(function() {
    // MOUSE WHEEL
    $('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            $('.owl-carousel').trigger('next.owl');
        } else {
            $('.owl-carousel').trigger('prev.owl');
        }
        e.preventDefault();
    });
    //hide the all of the element with class msg_body
    $(".expanded-text").hide();
    //toggle the componenet with class msg_body
    $(".toggle-expand").click(function () {
        $(this).next(".expanded-text").slideToggle(600);
    });
    $("#clearfix").css({"height": $("header").height() });
    $("#mask,.mob-nav").css({"margin-top": $("header").height() });
    $('.mob-show').click(function () {
        $('#mask').fadeIn(500);
        $('.mob-nav').css('right', '0');
    });
    $('#mask').click(function () {
        $('.mob-nav').css('right', '-270px');
        $('#mask').fadeOut(500);
    });
});