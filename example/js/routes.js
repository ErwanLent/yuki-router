const router = new Router();

router.register('/home', onHomeRoute);
router.register('/install/:installId', onInstallRoute);
router.register('/place', onPlaceRoute);