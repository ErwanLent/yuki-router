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

	replaceState(state, title, route) {
		window.history.replaceState(state, title, route);
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
		const urlVariables = {};
		const trimmedPathName = this._getTrimmedPathName();
		const splitPath = trimmedPathName.split('/');

		// install/123456 				[install, 123456]
		// install/:installId 		  	[install, :installId]

		// install/123456/charts		[install, 123456, charts]
		// install/:installId/charts	[install, :installId, charts]

		routesLoop: 
		for (let route of this.routes) {
			const splitRoutePath = this._trimPath(route.path).split('/');

			if (splitPath.length != splitRoutePath.length) {
				continue;
			}

			for (let routePathIndex = 0; routePathIndex < splitRoutePath.length; routePathIndex++) {
				const routePathElement = splitRoutePath[routePathIndex];

				if (routePathElement[0] == ':') {

					const urlVariableKey = routePathElement.substring(1);

					urlVariables[urlVariableKey] = splitPath[routePathIndex];

				} else if (routePathElement != splitPath[routePathIndex]) {
					continue routesLoop;
				}
			}

			// Route found
			route.callback(urlVariables);
			break;
		}
	}

	_getTrimmedPathName() {
		return this._trimPath(location.pathname);
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