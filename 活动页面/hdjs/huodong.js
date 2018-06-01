// JavaScript Document
$(function(){
	$(".hd_bd").children("div").mouseover(function(e) {
		$(this).css({opacity:0.8})
		$(this).children(".hd_zz").show();
    }).mouseout(function(e) {
		$(this).css({opacity:1})
		$(this).children(".hd_zz").hide();
    });

	


});