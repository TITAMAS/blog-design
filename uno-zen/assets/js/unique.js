$(function(){
   $('a[href^=#]').click(function() {
		var speed = 400; // ミリ秒
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
   });

	var $contactForm = $('#contactForm');
	var $submitButton = $('#submitButton')
	$contactForm.submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: 'https://formspree.io/media.lab.titech@gmail.com',
			type: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function() {
				$submitButton.prop('disabled', true);
				$submitButton.val('送信中…');
			},
			success: function(data) {
				$submitButton.val('送信完了');
				setTimeout(function(){
					$submitButton.prop('disabled', false);
					$submitButton.val('送信');
				}, 3000);
			},
			error: function(err) {
				$submitButton.val('Ops, there was an error.');
				setTimeout(function(){
					$submitButton.prop('disabled', false);
					$submitButton.val('送信');
				}, 3000);
			}
		});
	});
});
