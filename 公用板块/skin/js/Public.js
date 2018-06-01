// JavaScript Document
/******µÇÂ¼ µ¯³ö*************/
  $(document).ready(function(){
	$(".beijing").css({opacity:0.5})
	$(".header .h_box1 ul li.li1").click(function(e) {
        $("#tuiding").show();
		$(".beijing").show();
    });
	$(".cha").click(function(e) {
        $("#tuiding").hide();
		$(".beijing").hide();
    });
	
	//¶þÎ¬Âë
  $('.se_box2 ul li.ico1,.se_box2 ul li.ico2').hover(function () {
    $(this).find("p").stop(true, true).fadeToggle(0);
    $(this).addClass("Show");
  $('.se_box2 ul li.ico1,.se_box2 ul li.ico2').mouseleave(function () {
     $(this).removeClass("Show");
  });
 });
 
 //²Ëµ¥
  $('.header .h_box4 .nav_ul .nav_li').hover(function(){
    $(this).find('.x_ul').stop(true,true).fadeIn("st");
    $(this).find('.nav_a').removeClass("on").addClass("off");
	$("#nav_b2").stop(true,true).slideDown(500);
  });
    $('.header .h_box4 .nav_ul .nav_li').mouseleave(function(){
    $(this).find('.x_ul').stop(true,true).fadeOut("st");
    $(this).find('.nav_a').addClass("on").removeClass("off");
	$("#nav_b2").stop(true,true).slideUp(500);
  });
	
  });
