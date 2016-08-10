function onHomeRoute() {
	$('section').addClass('hidden');
	$('#default-section').removeClass('hidden');
}

function onInstallRoute({ installId }) {
	$('section').addClass('hidden');

	const $installSection = $('#install-section');

	$installSection.find('h1').text(`Install: ${installId}`);
	$installSection.removeClass('hidden');
}

function onPlaceRoute() {
	$('section').addClass('hidden');
	$('#place-section').removeClass('hidden');
}