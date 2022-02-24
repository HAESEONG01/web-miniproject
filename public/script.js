(function($){
	$('.shortcut_list .btn_open').click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass('shortcut_open');
	});
	$('.shortcut_list a').hover(
		function(){$(this).addClass('hover');},
		function(){$(this).removeClass('hover');}
	).focus(
		function(){$(this).addClass('focus');}
	).blur(
		function(){$(this).removeClass('focus');}
	);
	$('.shortcut_list ul a').click(
		function(){$(this).closest('.shortcut_list').removeClass('shortcut_open');}
	);
	$('body').click(function(){
		$('.shortcut_list').each(function(){
			if( !$(this).find('.focus').size() && !$(this).find('.hover').size() ){
				$(this).removeClass('shortcut_open');
			}
		});
	});
})(jQuery);
