// JavaScript Document
$(document).ready(function(){
	$('#select_btn li:first').css('border','none');
	if ($('#zSliders').length) {
		zSlider();
		$('#h_sns').find('img').hover(function(){
			$(this).fadeTo(200,0.5);
		}, function(){
			$(this).fadeTo(100,1);
		});
	}
	function zSlider(ID, delay){
		var ID=ID?ID:'#zSliders';
		var delay=delay?delay:5000;
		var currentEQ=0, picnum=$('#picshows_img li').size(), autoScrollFUN;
	
		$('#picshows_img li').eq(currentEQ).show();
		$('#picshows_tx li').eq(currentEQ).show();
		autoScrollFUN=setTimeout(autoScroll, delay);
		function autoScroll(){
			clearTimeout(autoScrollFUN);
			currentEQ++;
			if (currentEQ>picnum-1) currentEQ=0;
			
			$('#picshows_tx li').removeClass('current');
			$('#picshows_img li').hide();
			$('#picshows_tx li').eq(currentEQ).addClass('current');
			
			$('#picshows_img li').eq(currentEQ).show();
			autoScrollFUN = setTimeout(autoScroll, delay);
		}
		$('#picshows').hover(function(){
			clearTimeout(autoScrollFUN);
		}, function(){
			autoScrollFUN = setTimeout(autoScroll, delay);
		});
		
		$('#picshows_tx li').hover(function(){
			var picEQR=$('#picshows_tx li').index($(this));
			if (picEQR==currentEQ) return false;
			currentEQ = picEQR;
			
			$('#picshows_tx li').removeClass('current');
			$('#picshows_img li').hide();
			$('#picshows_tx li').eq(currentEQ).addClass('current');
			
			
			$('#picshows_img li').eq(currentEQ).show();
			return false;
			
		});
	};
});