/* ==========================================================================
   Router Class
   ========================================================================== */

class Router {

	constructor() {
		this.routes = [];
	}

	/* ==========================================================================
	   Public Functions
	   ========================================================================== */

	pushState(state, title, route) {
		window.history.pushState(state, title, route);
		this._onUrlChange();
	}

	register(path, callback) {
		const route = {
			path: this._trimPath(path),
			callback
		};

		this.routes.push(route);
	}

	/* ==========================================================================
	   Private Functions
	   ========================================================================== */

	_onUrlChange() {

		const trimmedPathName = this._getTrimmedPathName();
		console.log(trimmedPathName);


	}

	_getTrimmedPathName() {
		return(location.pathname);
	}

	_trimPath(pathName) {
		// Trim all beginning forward slashes
		while (pathName[0] == '/') {
			pathName = pathName.substring(1);
		}

		// Trim last forward slashes
		while (pathName[pathName.length - 1] == '/') {
			pathName = pathName.substring(0, pathName.length - 1);
		}

		return pathName;
	}
}