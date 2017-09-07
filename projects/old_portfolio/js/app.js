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
    // $('a[href^="#"]').on("click",function(){
    // 	var top=$($(this).attr("href")).offset().top - 140;
	 //    $("body").animate({scrollTop:top}, 1000);
    //
    // });
	$('a[href^="#"]').on("click",function(e) {
		var headerHeight = $('header').height();
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top - headerHeight;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 300);
		//When screen is less than 767
		if ($(window).width() < 767) {
			$('.navbar-toggle').click();
		}

		e.preventDefault();
	});
});

