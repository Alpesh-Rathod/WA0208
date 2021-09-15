

<!-- header sticky js -->

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".site-header").addClass("sticky");
    }
    else{
      $(".site-header").removeClass("sticky");
    }
  }); 




// 

$("#navbarDropdownMenuLink-wadb").on("click",function() {
  $(".dropdown-wadp").toggleClass("show");
  } );

  $(".dropdown-wadp a").on("click",function() {
    $(".dropdown-wadp").removeClass("show");
} );


// multi step from js

// step 1-2 js

$("#next").on("click",function () {
 $("#question_areafirst").hide();
 $("#question_areaTwo").show();
     $("#step-2").addClass("active");
     $("#step-1").removeClass("active");
});


$("#back").on("click",function () {
 $("#question_areaTwo").hide();
 $("#question_areafirst").show();
     $("#step-1").addClass("active");
     $("#step-2").removeClass("active");
});


// step 2-3 js

$("#step2-next").on("click",function () {
  $("#question_areaTwo").hide();
  $("#question_areaThird").show();
  $("#step-3").addClass("active");
  $("#step-2").removeClass("active");
 });

 
$("#step2-back").on("click",function () {
  $("#question_areaThird").hide();
  $("#question_areaTwo").show();
  $("#step-2").addClass("active");
  $("#step-3").removeClass("active");
 });


// step 3-4 js

$("#step3-next").on("click",function () {
  $("#question_areaThird").hide();
  $("#question_areaFour").show();
  $("#step-4").addClass("active");
  $("#step-3").removeClass("active");
 });

 
$("#step3-back").on("click",function () {
  $("#question_areaFour").hide();
  $("#question_areaThird").show();
  $("#step-3").addClass("active");
  $("#step-4").removeClass("active");
 });


// step 4-5 js

$("#step4-next").on("click",function () {
  $("#question_areaFour").hide();
  $("#question_areaFive").show();
  $("#step-5").addClass("active");
  $("#step-4").removeClass("active");
 });

 
$("#step4-back").on("click",function () {
  $("#question_areaFive").hide();
  $("#question_areaFour").show();
  $("#step-4").addClass("active");
  $("#step-5").removeClass("active");
 });


 // step 5-6 js

$("#step5-next").on("click",function () {
  $("#question_areaFive").hide();
  $("#question_areaSix").show();
  $("#step-6").addClass("active");
  $("#step-5").removeClass("active");
 });

 
$("#step5-back").on("click",function () {
  $("#question_areaSix").hide();
  $("#question_areaFive").show();
  $("#step-5").addClass("active");
  $("#step-6").removeClass("active");
 });


 $("#step6-next").on("click",function () {
  $("#signup").hide();
 });


 // Header Profile Dropdown
$(".profile-dropdown").hide();
$(".profile-user a").click(function(){
  $(".profile-dropdown").slideToggle();
});