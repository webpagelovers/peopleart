; (function ($) {
    $.fn.extend({
        "nav1": function (con) {
            var $this = $(this), $nav1 = $this.find('.switch-tab'), t = (con && con.t) || 3000, a = (con && con.a) || 500, i = 0, autoChange = function () {
                $nav1.find('a:eq(' + (i + 1 === 3 ? 0 : i + 1) + ')').addClass('current').siblings().removeClass('current');
                $this.find('.event-item:eq(' + i + ')').css('display', 'none').end().find('.event-item:eq(' + (i + 1 === 3 ? 0 : i + 1) + ')').css({
                    display: 'block',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, a, function () {
                    i = i + 1 === 3 ? 0 : i + 1;
                }).siblings('.event-item').css({
                    display: 'none',
                    opacity: 0
                });
            }, st = setInterval(autoChange, t);
            $this.hover(function () {
                clearInterval(st);
                return false;
            }, function () {
                st = setInterval(autoChange, t);
                return false;
            }).find('.switch-nav1>a').bind('click', function () {
                var current = $nav1.find('.current').index();
                i = $(this).attr('class') === 'prev' ? current - 2 : current;
                autoChange();
                return false;
            }).end().find('.switch-tab>a').bind('click', function () {
                i = $(this).index() - 1;
                autoChange();
                return false;
            });
            return $this;
        }
    });
}(jQuery));

$(function(){
	$('.zltu').hover(function(){
		$(this).children('p,h2').slideToggle()
		})
	})
	
	
; (function ($) {
    $.fn.extend({
        "nav2": function (con) {
            var $this = $(this), $nav = $this.find('.switch-tab2'), t = (con && con.t) || 3000, a = (con && con.a) || 500, i = 0, autoChange = function () {
                $nav.find('a:eq(' + (i + 1 === 3 ? 0 : i + 1) + ')').addClass('current2').siblings().removeClass('current2');
                $this.find('.event-item2:eq(' + i + ')').css('display', 'none').end().find('.event-item2:eq(' + (i + 1 === 3 ? 0 : i + 1) + ')').css({
                    display: 'block',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, a, function () {
                    i = i + 1 === 3 ? 0 : i + 1;
                }).siblings('.event-item2').css({
                    display: 'none',
                    opacity: 0
                });
            }, st = setInterval(autoChange, t);
            $this.hover(function () {
                clearInterval(st);
                return false;
            }, function () {
                st = setInterval(autoChange, t);
                return false;
            }).find('.switch-nav2>a').bind('click', function () {
                var current = $nav.find('.current2').index();
                i = $(this).attr('class') === 'prev' ? current - 2 : current;
                autoChange();
                return false;
            }).end().find('.switch-tab2>a').bind('click', function () {
                i = $(this).index() - 1;
                autoChange();
                return false;
            });
            return $this;
        }
    });
}(jQuery));

$(function(){
	$('.hot-event2').hover(function(){
		$('.hot-event2 .switch-nav2 .prev,.hot-event2 .switch-nav2 .next').show();
		},function(){
			$('.hot-event2 .switch-nav2 .prev,.hot-event2 .switch-nav2 .next').hide();
			})
	})



; (function ($) {
    $.fn.extend({		
        "nav3": function (con) {
            var $this = $(this), $nav = $this.find('.switch-tab3'), t = (con && con.t) || 3000, a = (con && con.a) || 500, i = 0, autoChange = function () {
                $nav.find('a:eq(' + (i + 1 === 4 ? 0 : i + 1) + ')').addClass('current3').siblings().removeClass('current3');
                $this.find('.event-item3:eq(' + i + ')').css('display', 'none').end().find('.event-item3:eq(' + (i + 1 === 4 ? 0 : i + 1) + ')').css({
                    display: 'block',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, a, function () {
                    i = i + 1 === 4 ? 0 : i + 1;
                }).siblings('.event-item3').css({
                    display: 'none',
                    opacity: 0
                });
            }, st = setInterval(autoChange, t);
            $this.hover(function () {
                clearInterval(st);
                return false;
            }, function () {
                st = setInterval(autoChange, t);
                return false;
            }).find('.switch-nav3>a').bind('click', function () {
                var current = $nav.find('.current3').index();
                i = $(this).attr('class') === 'prev' ? current - 2 : current;
                autoChange();
                return false;
            }).end().find('.switch-tab3>a').bind('click', function () {
                i = $(this).index() - 1;
                autoChange();
                return false;
            });
            return $this;
        }
    });
}(jQuery));