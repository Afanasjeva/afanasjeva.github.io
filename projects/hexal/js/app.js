$(document).ready(function(){
    $(window).on("scroll",function(){
		if ($("body").scrollTop()>30) {
	    	$(".up").css({display:"block"});
		} else{
	    	$(".up").css({display:"none"});
		}
    });

    $(".up").on("click",function(){
	    	$("body").animate({scrollTop:"0px"}, 1000);
    });

    $('a[href^="#"]').on("click",function(){
    	var top=$($(this).attr("href")).offset().top;
	    $("body").animate({scrollTop:top}, 1000);

    });

    $(".arrow").on("click",function(){
            
            $(".nav_down").slideToggle(500,
            function(){});
    });
//masked input begin
jQuery(function(){
    jQuery(".phone").mask("(999) 999-9999");
});
//masked input end

// validation begin
$("#feedbackForm").validate({
    rules:{
        name:{
            required: true,
            minlength: 2,
            maxlength: 20,

        },
        email:{
            email: true,
            required: true,
        },
        subject:{
            minlength: 2,
        },
        ta:{
            minlength: 10,
        },
    },
    messages:{

        name:{
            required: "Enter your name please!",
            minlength: "At list 2 characters please!",
            maxlength: "Oh! Its tooooooo long",
        },
        email:{
            required: "Please enter your email.",
            email: "Please check your email."
        },
        ta:{
            required: "Write something to me please",
        },
    }
});
//validation end
$("#owl-example").owlCarousel({
    // Most important owl features
    items : 1,
    itemsCustom : false,
    // itemsDesktop : [1199,4],
    // itemsDesktopSmall : [980,3],
    // itemsTablet: [768,2],
    // itemsTabletSmall: false,
    // itemsMobile : [479,1],
    singleItem : true,
    itemsScaleUp : true,
 
    //Basic Speeds
    slideSpeed : 600,
    paginationSpeed : 800,
    rewindSpeed : 1000,
 
    //Autoplay
    autoPlay : true,
    stopOnHover : false,
 
    // Navigation
    navigation : true,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,
 
    //Pagination
    pagination : true,
    paginationNumbers: true,
 
    // Responsive 
    // responsive: true,
    // responsiveRefreshRate : 200,
    // responsiveBaseWidth: window,
 
    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",
 
    //Lazy load
    // lazyLoad : false,
    // lazyFollow : true,
    // lazyEffect : "fade",
 
    //Auto height
    // autoHeight : false,
 
    //JSON 
    // jsonPath : false, 
    // jsonSuccess : false,
 
    //Mouse Events
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,
 
    //Transitions
    // transitionStyle : false,
 
    // // Other
    // addClassActive : false,
 
    // //Callbacks
    // beforeUpdate : false,
    // afterUpdate : false,
    // beforeInit: false, 
    // afterInit: false, 
    // beforeMove: false, 
    // afterMove: false,
    // afterAction: false,
    // startDragging : false
    // afterLazyLoad : false
 
	});
});

