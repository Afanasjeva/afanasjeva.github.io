$(document).on('ready',function(){
  console.log('test');
  $('.grid').isotope({
  itemSelector: '.grid_item',
  layoutMode: 'fitRows'
  });
});

