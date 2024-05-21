## Module Pattern in Node.js

In Node.js, modules are used to organize and encapsulate code into separate files, making it easier to manage and reuse code. There are two common ways of preparing modules in Node.js: CommonJS modules and ES modules.

### CommonJS Module

CommonJS is the module system used by Node.js by default. It uses the `module.exports` object to define what can be accessed from a module. Here's an example:

```javascript
// File: alzebra.js
function addition(num1, num2) {
  return num1 + num2;
}

// Exporting functions using CommonJS
module.exports = {
  addition: addition,
};

// File: index.js
const doCalculation = require("./alzebra");

let num1 = 5;
let num2 = 10;
let result = doCalculation.addition(num1, num2);
console.log(result); // Output: 15
```

In the above example, we define the `addition` function in the `alzebra.js` module and export it using `module.exports`. Then, in the `index.js` module, we import the `doCalculation` object from `alzebra.js` using `require` and use the exported function.

### ES Module

ES modules are a standard for organizing and sharing JavaScript code. Node.js added support for ES modules starting from version 13. To use ES modules in Node.js, you can either use the `.mjs` file extension or specify `"type": "module"` in the `package.json` file. Here's an example:

#### Using .mjs File

````javascript
// File: alzebra.js
function addition(num1, num2) {
  return num1 + num2;
}

// Exporting functions using ES modules
export default {
  addition: addition
};
``

`

```javascript
// File: index.mjs
import doCalculation from "./alzebra.js";

let num1 = 5;
let num2 = 10;
let result = doCalculation.addition(num1, num2);
console.log(result); // Output: 15
````

#### Using package.json File

To use ES modules with the `package.json` file, add the following configuration:

```json
{
  "type": "module"
}
```

```javascript
// File: alzebra.js
function addition(num1, num2) {
  return num1 + num2;
}

// Exporting functions using ES modules
const doCalculation = {
  addition: addition,
};
export default doCalculation;
```

```javascript
// File: index.js
import doCalculation from "./alzebra.js";

let num1 = 5;
let num2 = 10;
let result = doCalculation.addition(num1, num2);
console.log(result); // Output: 15
```
