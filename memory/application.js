$(document).ready(function(){
  var card_array = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8", "9", "9", "10", "10"];

  var click_count = 0;
  for(i in card_array){ //creates the cards
    $('#card_holder').append('<div class="card"><p>'+card_array[i]+'</p></div>');
  }
  $('.card').click(function(){ //when card is clicked...
    if (click_count == 0){
      $(this).find('p').css('opacity', 1); //shows what is behind the card
      click_count = 1;
    }
    else{
      
    }
  });
});
