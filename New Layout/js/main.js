$( document ).ready(function() {
    
    // HP Slider
    $('.owl-carousel').owlCarousel({
            loop:true,
            nav:false,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            autoWidth: true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },            
                960:{
                    items:4
                },
                1200:{
                    items:4
                }
            }
        });
    
    // MOUSE WHEEL
    $('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        $('.owl-carousel').trigger('next.owl');
    } else {
        $('.owl-carousel').trigger('prev.owl');
    }
    e.preventDefault();
        
    });

});