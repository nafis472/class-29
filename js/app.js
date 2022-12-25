
$(function () {
     // preloader js start
     $(window).on('load', function (){
        $('#preloader').fadeOut(1000);
     })
    // preloader js end

    $(".banner_slider").slick({
        autoplay:true,
        autoplaySpeed:1000,
        speed:1000,
        arrows:false,
        dots:true,
        dotsClass:'banner_slider_dots',
    })

    // recent_product_slider
    $(".recent_product_slider").slick({
        slidesToShow:4,
        prevArrow:'<i class="fa-solid fa-chevron-left recent_product_slider_icon"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right recent_product_slider_icon"></i>',
    })
})