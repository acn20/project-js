$(document).ready(function () {

	var galleryInterval = setInterval(function () {//functia set interval returneaza un id (numar), ca sa-i poti da clear
		$('#galerie img:eq(1)').animate({ 'left': 0 }, 700, function () {
			$('#galerie img:eq(0)').css({ 'left': '-400px' });
			$('#galerie').append($('#galerie img:eq(0)'));
		});
	}, 2500);

	$('#galerie').click(function () {
		clearInterval(galleryInterval);
	});

})