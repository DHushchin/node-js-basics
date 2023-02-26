# Control questions

## Difference between setTimeout() and setInterval()?
setTimeout() calls a passed-in function once after a specified delay, while setInterval() invokes one continuously at a designated time.


## What is blocking code?

Blocking and Non-blocking operations: Blocking operations refer to the pieces of code that block the execution of other code until they are completed. 
While non-blocking operations allow further pieces of code to execute without making them wait and use callbacks when they are completed.
 
 
## Advantages of asynchronous I/O
The Asynchronous I/O feature enhances performance by allowing applications to overlap processing with I/O operations. 
Using Asynchronous I/O enables an application to have more CPU time available to perform other processing while the I/O is taking place.


## Callback vs Promise vs Async/Await
A callback function is a function passed into another function as an argument, which is called inside the other function.
But when working with a lot of dependent asynchronous operations, you quickly end up in callback hell.

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
A Promise is a proxy for a value not necessarily known when the promise is created. 
It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason. 
This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, 
the asynchronous method returns a promise to supply the value at some point in the future.

Async/await is actually built on top of promises. It cannot be used with plain callbacks or node callbacks.
The word “async” before a function means one simple thing: a function always returns a promise. 
If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.
The keyword await makes JavaScript wait until that promise settles and returns its result.


## Error handling with promises
When a promise rejects, the control jumps to the closest rejection handler.
The easiest way to catch all errors is to append .catch to the end of chain.
.then also catches errors in the same manner, if given the second argument (which is the error handler).
If we throw error inside .catch, then the control goes to the next closest error handler. 
And if we handle the error and finish normally, then it continues to the next closest successful .then handler.

  
## How to create a directory if it doesn't exist using Node.js?
```
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
```
To create permanent directories, we can use the mkdir function to create them asynchronously. It takes 3 arguments. 
  
The first argument is the path object, which can be a string, a Buffer object or an URL object.
  
The second argument is an object with various properties that we can set as options.
  
The recursive property is a boolean property that lets us create all the levels of the directory if not all the levels exist. 
  
The mode property is an octal number property that we set the directory’s permission and sticky bit for POSIX systems. 
This option isn’t supported on Windows. The default value for mode is 0o777 , which is readable, writable and executable for everyone.
The mode integer can also replace the options object as the second argument. 
  
The third argument is a callback function which is called when the directory creation operation is complete.
