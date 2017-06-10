document.onclick = function(event) {
    var target = event.target;
    if (target.className != 'sidebar_link') return;
    document.querySelector('.active').classList.remove('active');
    target.classList.add("active");
};
$(document).ready(function(){
    $('.nav_icon').on('click', function(){
        $(this).toggleClass('open');
        $('aside').toggleClass('slide_showed');
    });
});

