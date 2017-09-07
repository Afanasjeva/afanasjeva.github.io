//функция запуска анимации
function animate_counter(){
    $('.count_n1').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.count_n2').each(function () {
        $(this).prop('Counter',7499500).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.count_n3').each(function () {
        $(this).prop('Counter',1000).animate({
            Counter: $(this).text()
        }, {
            duration: 2000, 
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.count_n4').each(function () {
        $(this).prop('Counter',4500).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });       
}
//функция проверки видимсти контейнера с анимацией и запуска анимации
function init_counter(){
    var window_top=$(window).scrollTop();
    var window_bottom=$(window).scrollTop()+$(window).height();
    var target_top=$('.stat').offset().top;
    if (window_bottom>target_top && !$("span").is(".count_n1")){
        //создаю спан со счетчиком
       $('.stat_n1').append('<span class="count_n1">500</span>');
       $('.stat_n2').append('<span class="count_n2">7500000</span>');
       $('.stat_n3').append('<span class="count_n3">1500</span>');
       $('.stat_n4').append('<span class="count_n4">5000</span>');
       animate_counter();
    }
    if (window_top>target_top || window_bottom<target_top){
       //удаляю спан со счетчиком
       $('.stat').html('');
    }
}
//документ загрузился*************************************************
$(document).ready(function(){
    $(window).on("scroll",function(){
        // console.log($(window).scrollTop());
		if ($(window).scrollTop()>300) {
	    	$(".menu_fixed").css({display:"block"});
		} else{
	    	$(".menu_fixed").css({display:"none"});
		}
    });

    $(".fa-bars").on("click",function(){
        // $(this).next('.menu_vertical').slideToggle();
    	$(".menu_vertical").slideToggle();
    });

    $('a[href^="#"]').on("click",function(){
    	var top=$($(this).attr("href")).offset().top;
	    $("body").animate({scrollTop:top}, 1000);
    });


    $('.header_slider').slick({
        autoplay: true,
        speed: 500,
    });

    $('.popular_projects_slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        speed: 500,
    });

    $('.our_services_slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
    });

    $('.feedback_slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        speed: 500,
    });


//**********************contacts.html****************************
//**********************row_our_team*****************************
    $(".image_mask").on("click",function(){
        var body = $("html, body");
        var top=$(this).offset().top;
        body.animate({scrollTop:top},500);
        console.log("test");
    });
    $(".person_1").on("click",function(){
        $(".about_person_1").slideDown(500);
        $(".about_person_2").css("display","none");
        $(".about_person_3").css("display","none");
        $(".about_person_4").css("display","none");
    });
    $(".person_2").on("click",function(){
        $(".about_person_2").slideDown(500);
        $(".about_person_1").css("display","none");
        $(".about_person_3").css("display","none");
        $(".about_person_4").css("display","none");
    });
    $(".person_3").on("click",function(){
        $(".about_person_3").slideDown(500);
        $(".about_person_2").css("display","none");
        $(".about_person_1").css("display","none");
        $(".about_person_4").css("display","none");
    });
    $(".person_4").on("click",function(){
        $(".about_person_4").slideDown(500);
        $(".about_person_2").css("display","none");
        $(".about_person_3").css("display","none");
        $(".about_person_1").css("display","none");
    });
    $(".our_team_about_close").on("click",function(){
        $(".row_our_team_about").slideUp(500);
    });
//**********3d_solutions.html***********************************
// **********counters***begin***********************************
    init_counter();
    $(document).scroll(function(){
        init_counter();
    });
// **********counters***end**************************************
});