// JavaScript Document
$(function(){
	//搜索下拉
	$("#btn01 ul").hide();
	$("#btn01 h3").click(function(event){
		  $("#btn01 ul").show();
		  event.stopPropagation();
	});
	$("#btn01 ul li").click(function(){
		var a=$(this).html();
		$("#btn01 h3").html(a);
		$("#btn01 ul").hide();
	});
	$("body").click(function(){
		$("#btn01 ul").hide();
	});
});