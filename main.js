$(document).ready(function(){
  $('#UpContainer').hide();
  $(window).resize(function(){
    if ($(window).width()< 980) {
      $(".brandbox").css('border',"");
    }
    else{
       $(".brandbox").css( 'border-right', '2px solid #858585');
    }
  });

  $(window).scroll(function(){
    var topVal = $('html').scrollTop()
      if(topVal > 631){
        $('#UpContainer').slideDown(200);
      }
      else if(topVal < 315){
        $('#UpContainer').slideUp(200);
      }
  });

  $('.brand').click(function(){
      $('.brand').prop('checked',false);
      $(this).prop('checked',true);
      var currentBrand = this.id;
    

      if(currentBrand == "ford"){
        $('.honda').hide('slow');
        $('.mazda').hide('slow');
        $('.mitsubishi').hide('slow');
        $('.toyota').hide('slow');
        $('.ford').show('slow');
      }

      if(currentBrand == "honda"){
        $('.ford').hide('slow');
        $('.mazda').hide('slow');
        $('.mitsubishi').hide('slow');
        $('.toyota').hide('slow');
        $('.honda').show('slow');
      }

      if(currentBrand == "mazda"){
        $('.ford').hide('slow');
        $('.honda').hide('slow');
        $('.mitsubishi').hide('slow');
        $('.toyota').hide('slow');
        $('.mazda').show('slow');
      }

      if(currentBrand == "mitsubishi"){
        $('.ford').hide('slow');
        $('.honda').hide('slow');
        $('.mazda').hide('slow');
        $('.toyota').hide('slow');
        $('.mitsubishi').show('slow');
      }

      if(currentBrand == "toyota"){
        $('.ford').hide('slow');
        $('.honda').hide('slow');
        $('.mazda').hide('slow');
        $('.mitsubishi').hide('slow');
        $('.toyota').show('slow');
      }

      if(currentBrand == "all"){
        $('.ford').show('slow');
        $('.honda').show('slow');
        $('.mazda').show('slow');
        $('.mitsubishi').show('slow');
        $('.toyota').show('slow');
      }


  });

  $('.socialMedias').click(function(e){
    e.preventDefault();
    alert('Not Implemented Yet');
  });


  $(function () {
  $('[data-toggle="popover"]').popover()
})

});