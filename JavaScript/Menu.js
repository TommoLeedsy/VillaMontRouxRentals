var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "300px"
    }, 200);
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-300px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });

  $('.main').on("swiperight", function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "300px"
    }, 200);
  });

  $('.menu').on("swipeleft", function() {
    $('.menu').animate({
      left: "-300px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};
$(document).ready(main);