$(function () {		
var bbs=$(".bbs_photo");
var bbsLiP=bbs.find(".photos");
var bbsLiYou=bbs.find(".you");
var bbsLi=bbsLiP.find("img");
var bbsLiFix=bbsLiP.find("li");
var bbsShow=bbs.find(".tipImg");
var bbsShowI=bbsShow.find("img");
var bbsShowT=bbsShow.find(".t");
var oldTL=null;
bbsLiFix.each(function(){
	var t=$(this);
	var fT=t.position().top;
	var fL=t.position().left;
	t.css({left:fL,top:fT});
	}).addClass("fix").find("*").removeAttr("title");
	bbsLiFix.each(function(ind) {
        var t=$(this);
        var tSrc=t.attr("src");
        var tL=t.position().left;
        var tT=t.position().top;
        var tW=t.width();
        var tH=t.height();
		var intData={"z-index":0,width:tW,height:tH,left:tL,top:tT};
		var cData={"z-index":999,width:tW,height:tH*2,left:tL,top:0};
		var aa={};
		t.hover(function(){
			   for(var i in intData){aa[i]=cData[i]};
			   oldTL
			   t.addClass("hot");
				t.css("z-index",999);
				t.stop(true,true).animate(aa,200);
				oldTL=tL;
				},function(){for(var i in intData){aa[i]=intData[i]}
				t.removeClass("hot");
				t.css("z-index",0);
				t.stop(true,true).animate(aa,200);
					});
		bbs.hover(function(){bbsLiP.addClass("hot")},function(){bbsLiP.removeClass("hot")})
    });
});