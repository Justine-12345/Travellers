
$(document).ready(function(){


$('.btn-modal').click(function () {
  $('#fsModal').show(400);
  var color = $(this).css("background-color");
  $('#fsModal').css({'backgroundColor': color});
});


$('.trigger').on('click', function () {
  //e.preventDefault();
  $('#fsModal').hide(400);
   if($('#fsModal').hasClass('flipInY')){
    $('#fsModal').removeClass('flipInY').addClass('flipOutY');
    //$('#fsModal').modal('hide.bs.modal');
    setTimeout(function(){
          $('#fsModal').modal('hide');
          $('#fsModal').removeClass('flipOutY').addClass('flipInY');
    }, 550);

   }else {

   }

});


$('.btn-modal2').click(function () {
  $('#fsModal2').show(400);
  var color = $(this).css("background-color");
  $('#fsModal2').css({'backgroundColor': color});
});


$('.trigger').on('click', function () {
  //e.preventDefault();
  $('#fsModal2').hide(400);
   if($('#fsModal2').hasClass('flipInY')){
    $('#fsModal2').removeClass('flipInY').addClass('flipOutY');
    //$('#fsModal2').modal('hide.bs.modal');
    setTimeout(function(){
          $('#fsModal2').modal('hide');
          $('#fsModal2').removeClass('flipOutY').addClass('flipInY');
    }, 550);

   }else {

   }

});


$('.btn-modal3').click(function () {
  $('#fsModal3').show(400);
  var color = $(this).css("background-color");
  $('#fsModal3').css({'backgroundColor': color});
});


$('.trigger').on('click', function () {
  //e.preventDefault();
  $('#fsModal3').hide(400);
   if($('#fsModal3').hasClass('flipInY')){
    $('#fsModal3').removeClass('flipInY').addClass('flipOutY');
    //$('#fsModal3').modal('hide.bs.modal');
    setTimeout(function(){
          $('#fsModal3').modal('hide');
          $('#fsModal3').removeClass('flipOutY').addClass('flipInY');
    }, 550);

   }else {

   }

});

})
