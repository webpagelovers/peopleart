// JavaScript Document
/*tab�л��ű�*/ 
function setTab(name,cursel,n){ 
for(i=1;i<=n;i++){ 
var menu=document.getElementById(name+i); 
var con=document.getElementById("tab_"+name+"_"+i); 
menu.className=i==cursel?"tabfirst":""; 
con.style.display=i==cursel?"block":"none"; 
} 
} 


/******��¼ ����*************/
	//$("body").click(function(e) {
    //    alert("ok")
   // });
   
  $(document).ready(function(){


	$(".beijing").css({opacity:0.5})
	$(".w67").click(function(e) {
        $("#tuiding").show();
		$(".beijing").show();
    });
	$(".cha").click(function(e) {
        $("#tuiding").hide();
		$(".beijing").hide();
		
    });
  });

/******�鱦�����л�***/
$(document).ready(function(){
$(".zbyw_list dl").mouseover(function(){
	$(".zbyw_list dl").not(this).removeClass("hover");
	$(this).addClass("hover");
	}).mouseout(function(){
		$(this).removeClass();
		});
});
/****��̳����****/
$(document).ready(function(){
 $(".bztj_list dl").mouseover(function(){
				
				$(".bztj_list dl").not(this).removeClass("hover");
				$(this).addClass("hover")
				
				}).mouseout(function(){
					$(this).removeClass("hover");
					});
					
});
/***�鱦�黭***/
$(document).ready(function(){
    $(".sh_box ul li").mouseover(function(){
		$(".sh_box ul li").not(this).removeClass("hover").addClass("mrb");
		$(this).removeClass("mrb hover").addClass("hover");
		}).mouseout(function(){
			$(".sh_box ul li").removeClass("mrb hover");
			
			});
			
			
		

});