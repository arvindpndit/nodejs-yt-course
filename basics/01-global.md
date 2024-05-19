## Globals in Node.js

Node.js provides several global objects and variables that are accessible throughout the application. Some commonly used globals in Node.js include:

- `__dirname`: A string representing the directory name of the current module.
- `__filename`: A string representing the file name of the current module.
- `exports`: An object used to export variables, functions, or objects from a module.
- `module`: An object representing the current module.
- `require()`: A function used to import modules or files.
- `process`: An object representing the current Node.js process.
- `console`: The console object provides methods to log and display information in the console.
- `setTimeout & setInterval`: These functions are used to schedule the execution of code after a certain delay (setTimeout) or at fixed intervals (setInterval).

For example, you can use `console.log(__dirname)` to print the current directory name or `console.log(process)` to access information about the current process.

## `process` Global Object

The `process` global object in Node.js provides information and control over the current Node.js process. It can be used to print output to the terminal, similar to `console.log()`.

**Code Example:**

```javascript
process.stdout.write("hello, arvind!");
process.stdout.write("nice to meet ya");
```
