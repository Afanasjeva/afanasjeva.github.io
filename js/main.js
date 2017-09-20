$(function(){

    let gridItemsInit = function(){
        $('.grid_item').each(function() {
            $(this).height($(this).width());
        });
        $('.grid_item_vertical').each(function() {
            $(this).height($(this).width()*2);
        });

    };

    gridItemsInit();
    $(window).on('resize',function(){
        gridItemsInit();
        // $('.grid').isotope('shuffle');
    });

    $('.grid').isotope({
      itemSelector: '.grid_item',
      layoutMode: 'masonry'
    }).isotope({ filter: '.grid_item' });

    $('.filter_link').on('click',function(e){
        e.preventDefault();
        var selector = $(this).data('filter');
        if ( selector !== '*' ) {
            selector = selector + ', .corner_stamp'
        }
        $('.grid').isotope({ filter: selector });
    });
    // *****************************************************************************************color_link
    var color;
    $('.color_link').each(function(e){
        color = $(this).data('color');
        $(this).find('i').css({'color':color});
    });
    $('.color_link').on('click',function(e){
       e.preventDefault();
       color = $(this).data('color');
       $(':root').css({'--color_main':color});
    });
    // *****************************************************************************************slim_scroll
    /*$('.grid').slimscroll({
        height: 'auto',
        size: '5px',
        color: color,
        distance: '10px',
        opacity: 1,
    });*/

});