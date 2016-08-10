# Yuki Router
Lightweight client-sided router made for web inspired by Express. Dependency free.

### Overview
I wanted a simple, lightweight solution to web routing that was easy to integrate into existing projects. Simply register a route path with a callback:
	
```javascript
const router = new Router();

router.register('/home', onHomeRoute);
router.register('/install/:installId', onInstallRoute);
router.register('/place', onPlaceRoute);
```

Make sure to define your methods before you register your routes.

```javascript
function onHomeRoute() {
	console.log('home route!');
}

function onInstallRoute({ installId }) {
	console.log('install route with the url variable: ', installId);
}

function onPlaceRoute() {
	console.log('place route!');
}
```

To push or replace the state, simply call the router functions just like you would use the native HTML5 History API:

```javascript
router.pushState('', 'Default Section', '/home')
```

OR

```javascript
router.replaceState('', 'Default Section', '/home')
```

### Example
http://107.170.236.35:8080/home

### Distribution
The minified version has been transpiled with Babel for compatibility with older browsers.
