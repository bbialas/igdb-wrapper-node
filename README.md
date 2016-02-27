# igdb-wrapper-node

Node.JS wrapper for IGDB API.

https://www.igdb.com/api/v1/documentation

### Instalation
Install npm package
```bash
npm install igdb-wrapper-node
```
Include package into your code
```js
var igdb = require('igdb-wrapper-node');
```

### Usage

```js
igdb.platforms.get({}, function(err, response) {
  // response handler
});
```
