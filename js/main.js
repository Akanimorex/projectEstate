$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
    
    autoPlayHoverPause:false,
    items : 3,
    margin:10,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    center: true,
    nav:true,
    dots:true,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    
    
    
    
    
    
    });
    
    });

