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
   	$contactForm.submit(function(e) {
   	e.preventDefault();
   	$.ajax({
   		url: 'https://formspree.io/media.lab.titech@gmail.com',
   		type: 'POST',
   		data: $(this).serialize(),
   		dataType: 'json',
   		beforeSend: function() {
   			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
   		},
   		success: function(data) {
   			$contactForm.find('.alert--loading').hide();
   			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
   		},
   		error: function(err) {
   			$contactForm.find('.alert--loading').hide();
   			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
   		}
   	});
   });

});
