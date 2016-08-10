$(document).ready(() => {
	$('#default-button').click(() => {
		router.pushState('', 'Default Section', '/home');
	});

	$('#install1-button').click(() => {
		const installId = 'sd5g56dfbg1w6wefaa2315165/';
		router.pushState({
			installId
		}, 'Install Section', `/install/${installId}`);
	});

	$('#install2-button').click(() => {
		const installId = '4984vserf4eqw19f6s';
		router.pushState({
			installId
		}, 'Install Section', `/install/${installId}`);
	});

	$('#place-button').click(() => {
		router.pushState('', 'Place Section', '/place');
	});
});