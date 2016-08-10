const router = new Router();

router.register('/install/:installId', (urlVariables) => {
	console.log('callback called');
	console.log(urlVariables);
});