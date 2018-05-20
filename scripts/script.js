$(document).ready(function () {
    //menu call
    mobileMenu();
    $(window).scroll(function(){
		if((($(this).scrollTop()>100) && ($(window).width() < 800)) || ((($(this).scrollTop() > 200) && ($(window).width() > 800)))){
			$('.scrollTop').fadeIn();
		}else{
			$('.scrollTop').fadeOut();
		}
	});

    $(".s1").show();
    $(".s1").addClass("active");
    $(".sl1").show();


    $(".s1").click(function(){
        $(this).addClass("active");
        $(".sl1").slideToggle();
        $(".sl2").slideUp();
        $(".sl3").slideUp();
        $(".sl4").slideUp();
        $(".sl5").slideUp();
        $(".s5").removeClass("active");
        $(this).next().removeClass("active");
        $(this).prev().removeClass("active");
    });
    $(".s2").click(function(){
        $(this).addClass("active");
        $(".sl2").slideToggle();
        $(".sl1").slideUp();
        $(".sl3").slideUp();
        $(".sl4").slideUp();
        $(".sl5").slideUp();
        $(this).next().removeClass("active");
        $(this).prev().removeClass("active");
    });
    $(".s3").click(function(){
        $(this).addClass("active");
        $(".sl3").slideToggle();
        $(".sl1").slideUp();
        $(".sl2").slideUp();
        $(".sl4").slideUp();
        $(".sl5").slideUp();
        $(this).next().removeClass("active");
        $(this).prev().removeClass("active");
    });
    $(".s4").click(function(){
        $(this).addClass("active");
        $(".sl4").slideToggle();
        $(".sl1").slideUp();
        $(".sl2").slideUp();
        $(".sl3").slideUp();
        $(".sl5").slideUp();
        $(this).next().removeClass("active");
        $(this).prev().removeClass("active");
    });
    $(".s5").click(function(){
        $(this).addClass("active");
        $(".sl5").slideToggle();
        $(".sl1").slideUp();
        $(".sl2").slideUp();
        $(".sl3").slideUp();
        $(".sl4").slideUp();
        $(".s1").removeClass("active");
        $(this).next().removeClass("active");
        $(this).prev().removeClass("active");
    });
   
    // $(".submitbtn").click(function(){
    //     $(".err").css("visibility","visible");
    // });
    $(".showbtn").click(function() { 
        $(".overlay").slideToggle();
        $(".popup").slideToggle();
         $('.close').on('click', function() {
           $('.popup').fadeOut(1000);
           $('.overlay').fadeOut(1000);
       });
    });
    
});

//menu
function scrolToTop(){
    $("html,body").animate({ scrollTop:0},1000);
}

function mobileMenu() {
    $('#nav-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.menuWrap').toggleClass('open');
    });
}
$(function() {
    $(".submitbtn").click(function() {
      // validate and process form here
  		var email = $("input#email").val();
  		if (email == "") {
        $(".err").css("visibility","visible");
        $("input#email").focus();
        return false;
      }
  		var phone = $("input#phone").val();
  		if (phone == "") {
            $(".err").css("visibility","visible");
        $("input#phone").focus();
        return false;
      }
      
    });
  });