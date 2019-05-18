$(document).ready(function(){


//var altura = 0;

$(window).on("scroll",function(){

  scroll = $(window).scrollTop();


  if($(window).width() > 480){
    if(scroll > 100){
      $(".menu").css("background","#FFF");
      $(".logo").css("color","#000");
      $(".opciones-menu").css("color","#30374b");
      $(".menu").css("padding","5px 0");
      $(".menu").addClass("menu-shadow");
    } else{
        $(".menu").css("background","transparent");
        $(".logo").css("color","#fff");
        $(".opciones-menu").css("color","#fff");
        $(".menu").css("padding","20px 0");
        $(".menu").removeClass("menu-shadow");
    }
  }

  if($(window).width() < 480){
    if(scroll > 100){
      $(".menu").css("background","#FFF");
      $(".logo").css("color","#000");
      $(".menu").addClass("menu-shadow");
    } else{
      $(".menu").css("background","transparent");
      $(".logo").css("color","#fff");
      $(".menu").removeClass("menu-shadow");
    }
  }



});



if($(window).width() < 500){
 $('.menu-icon').on('click', function(){
   $('nav').slideToggle();
 })
}






});
