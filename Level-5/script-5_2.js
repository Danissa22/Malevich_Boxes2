$(document).ready(function){

  var state = 'off';

$('button').click(function(){

   if(state == 'off'){
     // turn on the lights
     $('body').css('background','white');
     state = 'on';
   }

   else {
     // turn off the lights
     $('body').css('background','#181923');
     state = 'off';
   }

});

$("#Light").mouseenter(function(){
  $("#Light").css('color',
  'white');

});







});
