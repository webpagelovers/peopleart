// JavaScript Document

$(document).ready(function(){
	$('#select_btn li:first').css('border','none');
	if ($('#zSlider').length) {
		zSlider();
		$('#h_sns').find('img').hover(function(){
			$(this).fadeTo(200,0.5);
		}, function(){
			$(this).fadeTo(100,1);
		});
	}
	function zSlider(ID, delay){
		var ID=ID?ID:'#zSlider';
		var delay=delay?delay:5000;
		var currentEQ=0, picnum=$('#picshow_img li').size(), autoScrollFUN;
		$('#select_btn li').eq(currentEQ).addClass('current');
		$('#picshow_img li').eq(currentEQ).show();
		$('#picshow_tx li').eq(currentEQ).show();
		autoScrollFUN=setTimeout(autoScroll, delay);
		function autoScroll(){
			clearTimeout(autoScrollFUN);
			currentEQ++;
			if (currentEQ>picnum-1) currentEQ=0;
			$('#select_btn li').removeClass('current');
			$('#picshow_tx li').removeClass('current');
			$('#picshow_img li').hide();
			$('#picshow_tx li').eq(currentEQ).addClass('current');
			$('#select_btn li').eq(currentEQ).addClass('current');
			$('#picshow_img li').eq(currentEQ).show();
			autoScrollFUN = setTimeout(autoScroll, delay);
		}
		$('#picshow').hover(function(){
			clearTimeout(autoScrollFUN);
		}, function(){
			autoScrollFUN = setTimeout(autoScroll, delay);
		});
		$('#select_btn li').hover(function(){
			var picEQ=$('#select_btn li').index($(this));
			if (picEQ==currentEQ) return false;
			currentEQ = picEQ;
			$('#select_btn li').removeClass('current');
			$('#picshow_tx li').removeClass('current');
			$('#picshow_img li').hide();
			$('#picshow_tx li').eq(currentEQ).addClass('current');
			$('#select_btn li').eq(currentEQ).addClass('current');
			$('#picshow_img li').eq(currentEQ).show();
			return false;
			
		});
		$('#picshow_tx li').hover(function(){
			var picEQR=$('#picshow_tx li').index($(this));
			if (picEQR==currentEQ) return false;
			currentEQ = picEQR;
			$('#select_btn li').removeClass('current');
			$('#picshow_tx li').removeClass('current');
			$('#picshow_img li').hide();
			$('#picshow_tx li').eq(currentEQ).addClass('current');
			$('#select_btn li').eq(currentEQ).addClass('current');
			
			$('#picshow_img li').eq(currentEQ).show();
			return false;
			
		});
	};
});
//活动信息
$(document).ready(function(){
	$('#selecta_btn li:first').css('border','none');
	if ($('#zSlidera').length) {
		zSlider();
		$('#h_sns').find('img').hover(function(){
			$(this).fadeTo(200,0.5);
		}, function(){
			$(this).fadeTo(100,1);
		});
	}
	function zSlider(ID, delay){
		var ID=ID?ID:'#zSlider';
		var delay=delay?delay:5000;
		var currentEQ=0, picnum=$('#picshowa_img li').size(), autoScrollFUN;
		$('#selecta_btn li').eq(currentEQ).addClass('current');
		$('#picshowa_img li').eq(currentEQ).show();
		$('#picshowa_tx li').eq(currentEQ).show();
		autoScrollFUN=setTimeout(autoScroll, delay);
		function autoScroll(){
			clearTimeout(autoScrollFUN);
			currentEQ++;
			if (currentEQ>picnum-1) currentEQ=0;
			$('#selecta_btn li').removeClass('current');
			$('#picshowa_tx li').removeClass('current');
			$('#picshowa_img li').hide();
			$('#picshowa_tx li').eq(currentEQ).addClass('current');
			$('#selecta_btn li').eq(currentEQ).addClass('current');
			$('#picshowa_img li').eq(currentEQ).show();
			autoScrollFUN = setTimeout(autoScroll, delay);
		}
		$('#picshowa').hover(function(){
			clearTimeout(autoScrollFUN);
		}, function(){
			autoScrollFUN = setTimeout(autoScroll, delay);
		});
		$('#selecta_btn li').hover(function(){
			var picEQ=$('#select_btn li').index($(this));
			if (picEQ==currentEQ) return false;
			currentEQ = picEQ;
			$('#selecta_btn li').removeClass('current');
			$('#picshowa_tx li').removeClass('current');
			$('#picshowa_img li').hide();
			$('#picshowa_tx li').eq(currentEQ).addClass('current');
			$('#selecta_btn li').eq(currentEQ).addClass('current');
			$('#picshowa_img li').eq(currentEQ).show();
			return false;
		});
		$('#picshowa_tx li').hover(function(){
			var picEQR=$('#picshowa_tx li').index($(this));
			if (picEQR==currentEQ) return false;
			currentEQ = picEQR;
			$('#selecta_btn li').removeClass('current');
			$('#picshowa_tx li').removeClass('current');
			$('#picshowa_img li').hide();
			$('#picshowa_tx li').eq(currentEQ).addClass('current');
			$('#selecta_btn li').eq(currentEQ).addClass('current');
			$('#picshowa_img li').eq(currentEQ).show();
			return false;
		});
	};
})