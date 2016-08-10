$(document).ready(() => {
	
	router.pageLoad();

	$('#default-button').click(() => router.pushState('', 'Default Section', '/home'));
	$('#place-button').click(() => router.pushState('', 'Place Section', '/place'));

	$('#install1-button').click(() => {
		const installId = 'sdf15s1s5/';
		router.pushState('', 'Install Section', `/install/${installId}`);
	});

	$('#install2-button').click(() => {
		const installId = '165189sf19sd';
		router.pushState('', 'Install Section', `/install/${installId}`);
	});
	
});