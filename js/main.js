$(function(){

    $('.grid_item').each(function() {
        $(this).height($(this).width());
    });
    $('.grid_item_vertical').each(function() {
        $(this).height($(this).width()*2);
    });
    $(window).on('resize',function(){
        $('.grid_item').each(function() {
            $(this).height($(this).width());
        });
        $('.grid').isotope('shuffle');
    });
    $('.grid').isotope({
      itemSelector: '.grid_item',
      layoutMode: 'masonry',
        cellsByRow: {
            columnWidth: 200,
            rowHeight: 200
        },
    });
    $('.filter_link').on('click',function(e){
        e.preventDefault();
        var selector = $(this).data('filter');
        if ( selector !== '*' ) {
            selector = selector + ', .corner_stamp'
        }
        $('.grid').isotope({ filter: selector });

    });
});