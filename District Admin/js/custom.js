

// $(".toggle-password").click(function() {

//   $(this).toggleClass("fa-eye fa-eye-slash");
//   var input = $($(this).attr("toggle"));
//   if (input.attr("type") == "password") {
//     input.attr("type", "text");
//   } else {
//     input.attr("type", "password");
//   }
// });


// password 


$(document).ready(function(){  
  $('.eye-icon').click(function(){
    if($(this).prev().attr('type')== 'password'){
        $(this).prev().attr('type','text');
        $(this).find('#pw-close').hide();
        $(this).find('#pw-open').show();
    }
    else{
        $(this).prev().attr('type','password');
        $(this).find('#pw-close').show();
        $(this).find('#pw-open').hide();
    }        
 });

});



// sidemenu

$(document).ready(function(){
  $('.menu-ico-g').click(function(){
  $('.page-wrapper').toggleClass('hide');
      });

      $('.menu-ico-g').click(function(){
          if($(this).hasClass('mb-ic')) {
          $(this).removeClass('mb-ic');
          }
          else{
              $(this).addClass('mb-ic');
          }
          
      });


 });

//  Forum Toggle 
 $(document).ready(function(){
    $(".toggle").click(function(){        
      $(".toggle-child_1").toggle();
    });
  });
