$(document).ready(function(){
  var card_array = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10"];

  for(i in card_array){
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
  $('.card').click(function(){
    $(this).find('p').css('opacity', 1);
    
  });
});
