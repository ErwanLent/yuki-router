# Yuki Router
Lightweight router made for web inspired by Express.

### Overview
I wanted a simple, lightweight solution to web routing with callbacks. Simply register a route path with a callback:
	
```javascript
const router = new Router();

router.register('/home', onHomeRoute);
router.register('/install/:installId', onInstallRoute);
router.register('/place', onPlaceRoute);
```

Make sure to define your functions before you register your routes.

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


### Distribution
The minified version has been transpiled with Babel for compatibility with older browsers.
