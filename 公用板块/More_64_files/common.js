//ͷ�����
function AdvAuto(){
	if($(".dt_big").length>0){
		var a=1500;
		var b=5*1000;
		$(".dt_big").delay(b).slideUp(a,function(){
			$(".dt_small").slideDown(a);
			$(".dt_toBig").delay(a).fadeIn(0)
		});
		$(".dt_toSmall").fadeOut(a)
	}
}

//tab�л�
$(function () {
                function tabs(tabTit, on, tabCon) {
                    $(tabCon).each(function () {
                        $(this).children().eq(0).show();
                    });
                    $(tabTit).each(function () {
                        $(this).children().eq(0).addClass(on);
                    });
                    $(tabTit).children().hover(function () {//���"click"��Ч��
                        $(this).addClass(on).siblings().removeClass(on);
                        var index = $(tabTit).children().index(this);
                        $(tabCon).children().eq(index).show().siblings().hide();
                    });
                }
				tabs(".tabhd", "on", ".tabbd");
				tabs(".tab2hd", "on", ".tab2bd");
				tabs(".zlhd", "on", ".zlbd");
				tabs(".phhd", "on", ".phbd");
				tabs(".sphd", "on", ".spbd");
				tabs(".mapnav", "on", ".mapcon");
				tabs(".hlhd ul", "on", ".hlbd");
				tabs(".tab3hd", "on", ".tab3bd");
				tabs(".tjtit ul ", "on", ".zltab");
				tabs(".hotnav ", "on", ".hotcon");
				tabs(".zltopnav ", "on", ".zltopcon");
            });
			
			
//nav����

$(function () {
 $nav_list=$(".mainnav li");
 	$(".mainnav ul").each(function(){
	var y = $(this).children().last();
	$(y).addClass('nobg')
	});
 	$('.mainnav ul').last().addClass('on')
    var i=$nav_list.index($(".mainnav li").filter('.on'));
    $(".mainnav li").mouseover(function(){
        $(this).addClass("on").siblings().removeClass("on").end().find("div").show();
    }).mouseleave(function(){
        $(this).removeClass("on").find("div").hide();     
    });
    $(".mainnav").mouseleave(function(){
    	$nav_list.eq(i).addClass("on").find("div").show();
    });
})



//��ҳ�ղ�����
$(document).ready(
	function() 
	{
		$(".mlcon h2").click(function(){
			$(this).next("div").slideToggle(500).siblings(".fenlei:visible").slideUp("slow");
			$(this).toggleClass("active");
			$(this).siblings(".active").removeClass("active");
		});
	});



//�ղ�����
$(document).ready(
	function() 
	{
		$(".mlnav").hover(function(){
			$(this).children(".mlsub").show()
			$(this).addClass("active");
		},function(){
			$(this).removeClass("active");
			$(this).children(".mlsub").hide()
			});
	});

//��Ѷ���¹���

	function AutoScroll(obj){
		var  h=$("#scrollDiv").height()
		$(obj).find("ul:first").animate({
			marginTop:-h
		},500,function(){
			$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
		});
	}
	$(document).ready(function(){
		setInterval('AutoScroll("#scrollDiv")',3000);
		});	
		
		
		
		
//�ı������
$(function () {
	jQuery.focusblur = function(focusid) {
		var focusblurid = $(focusid);
		var defval = focusblurid.val();
		focusblurid.focus(function(){
			var thisval = $(this).val();
			if(thisval==defval){
				$(this).val("");
			}
		});
		focusblurid.blur(function(){
			var thisval = $(this).val();
			if(thisval==""){
				$(this).val(defval);
			}
		});
	};
	$.focusblur(".hlsbox");
	$.focusblur(".ysjbox");
})


//����չ���б�����

$(function(){
	$('.paixu li').hover(function(){
		$(this).children('ul').slideToggle('on')
		})
	})
	
//��Ƶ�б�����
$(function(){
	$('.px').hover(function(){
		$(this).toggleClass('on')
		})
	})





//����nav
$(function(){
	$(".hlnav ul li").append("<p class='pngFix'></p>");
	
	$(".hlnav ul li").hover(function(){
			$(this).children("p").stop().animate({left:"0px"},300);
	},function(){
			$(this).children("p").stop().animate({left:"-155px"},300);
	});	
	$(".hlnav ul li.current").hover(function(){
			$(this).children("p").stop().animate({left:"0px"},300);
	},function(){
			$(this).children("p").stop().animate({left:"0px"},300);
	});
});






//�����˵�
$(document).ready(function(){
	$(".select_box input , .select_box1 input,.cp_select_box input,.cp_select_box1 input,.select_box3 input").click(function(){
		var thisinput=$(this);
		var thisul=$(this).parent().find("ul");
		if(thisul.css("display")=="none"){
			if(thisul.height()>200){thisul.css({height:"200"+"px","overflow-y":"scroll" })};
			thisul.fadeIn("100");
			thisul.hover(function(){},function(){thisul.fadeOut("100");})
			thisul.find("li").click(function(){thisinput.val($(this).text());thisul.fadeOut("100");}).hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});
			}
		else{
			thisul.fadeOut("fast");
			}
	})
});


$(function(){
		$('.zwen img').parents().css('text-indent',0)
		$('.zwen img').parents().next('p').css({"text-indent":"0px","padding-top":"5px"})
	})
	

$(document).ready(
	function() 
	{
		$(".zhuanti").each(function () {
                        $(this).children().eq(0).addClass("on");
                    });
		$(".zhuanti dl").hover(function(){
			 
			//$(this).siblings("dd").toggle();
			$(this).addClass("on").siblings().removeClass("on");
			//$(this).siblings(".on").removeClass("on");
		});
	});
	
$(function(){$(".loginbut").click(function(){$(".mask").show();$(".login_bg").show()});$(".close").click(function(){$(".mask").hide();$(".login_bg").hide()})})
