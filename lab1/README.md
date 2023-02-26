# Control questions:

## What is the difference between executing JavaScript in a browser and in a Node.js environment?
 1. JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
 2. Node.js has full access to the system like any other source
    application. This means it can read and write directly to or from
    the file system, it can also have unlimited network access, and it
    can execute software.


## What are JavaScript data types?
Primary types:
1. String  
2. Number  
3. Bigint  
4. Boolean  
5. Undefined  
6. Null  
7. Symbol  
8. Object

Object types:
 1. An object  
 2. An array  
 3. A date
 
 
## How does closure work in JavaScript?
A closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

       function init() {
          var name = "Example"; // local variable created by init
          function displayName() {
            // inner function, that forms the closure
            console.log(name); 
            // use variable declared in the parent function
          }
          displayName();
        }
        init();



## What are main build-in modules in Node.js?
 - fs: to handle the file system
 - http: to make Node.js act as an HTTP server
 - net: to create servers and clients
 - os: provides information about the operation system
 - stream: to handle streaming data


## How to import modules in Node.js?
Node JS Platform has provided a function call **“require()”** to import one module into another.

Syntax: 
`var some-name = require("module-name")`

This require() call import the specified module and cached into the application so that we don’t need to import it again and again.

According to ES6 standards, exports/imports are used, not require.

1. Importing an entire module: 

`import * as name from 'module-name'`

2. Import default export from a module:

`import name from 'module-name'`

3. Importing a single export from a module:

`import { name } from 'module-name'`

4. Importing multiple exports from a module:

`import { nameOne , nameTwo } from 'module-name'`

5. Importing a module for side effects only

`import './module-name'`

## How Node.js and Google Chrome are connected?
 Node.js is an open-source runtime environment that allows JavaScript code to be executed outside the browser. It is based on the V8 JavaScript engine of Google Chrome.
 
 
## How to allow variables to be imported from current module?  
 Module exports are the instruction that tells Node.js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code.
 
 
You can export functions and values from a module by either using module.exports:

`
module.exports = { value1, function1 }
`

or by using exports:

`
exports.value1 = value1
exports.function1 = function1
`
