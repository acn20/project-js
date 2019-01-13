$(document).ready(function () {
	
	var x = setInterval(function () {
		$('#galerie img:eq(1)').animate({
			'left': 0
		}, 700, function () {
			$('#galerie img:eq(0)').css({ 'left': '-400px' })
			$('#galerie').append($('#galerie img:eq(0)'))
		});
	}, 2500)

	$('#galerie').click(function () {
		clearInterval(x);
	});

});
