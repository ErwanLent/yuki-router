$(document).ready(() => {
	
	$('#default-button').click(() => router.pushState('', 'Default Section', '/home'));
	$('#place-button').click(() => router.pushState('', 'Place Section', '/place'));

	$('#install1-button').click(() => {
		const installId = 'sd5g56dfbg1w6wefaa2315165/';
		router.pushState('', 'Install Section', `/install/${installId}`);
	});

	$('#install2-button').click(() => {
		const installId = '4984vserf4eqw19f6s';
		router.pushState('', 'Install Section', `/install/${installId}`);
	});
	
});