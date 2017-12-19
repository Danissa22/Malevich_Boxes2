$(document).ready(function(){
  $('#Start-Text').mouseenter(function() {
       $('#Start-Text').fadeOut('slow').delay(2000).fadeIn('slow');
  });


  $("#Eternal").click(function(){

  $("#Eternal").animate({
          opacity: '0.4',
          height: '500px',
          width: '500px'
      });
});

});
