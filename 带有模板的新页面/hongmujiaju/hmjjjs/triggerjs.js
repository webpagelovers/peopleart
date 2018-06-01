$(document).ready(function(){
//二级菜单下滑效果
  var st = 500;
  $('.hmjj_nav .nav_ul .nav_li').hover(function(){
  $(this).find('.x_ul').stop(true,true).fadeIn("st");
  $(this).find('.nav_a').removeClass("on").addClass("off");
  });
  $('.hmjj_nav .nav_ul .nav_li').mouseleave(function(){
  $(this).find('.x_ul').stop(true,true).fadeOut("st");
  $(this).find('.nav_a').addClass("on").removeClass("off");
  });
});