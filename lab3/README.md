# Control questions

## Inheritance in JavaScript

In JavaScript, inheritance is supported by using prototype object. 
Some people call it "Prototypal Inheriatance" and some people call it "Behaviour Delegation".
All JavaScript objects have a hidden, internal [[Prototype]] property (which may be exposed through __proto__ in some browsers). 
Objects can be extended and will inherit the properties and methods on [[Prototype]] of their constructor.
These prototypes can be chained, and each additional object will inherit everything throughout the chain. 
The chain ends with the Object.prototype.

## What is the function of Express JS?

Express.js is an open-source backend framework.
It's a layer built on the top of the Node.js that helps manage servers and routes.

## What is middleware?
Middleware functions are essential when dealing with common functions in web applications.
Middleware comes in the middle of the request and response cycle of the node.js execution. 
It also provides access to many functions like request and response objects with the Next function of the cycle.
Tasks that can be performed with the middleware functions include:
- Making quick changes to the request and response objects
- Calling the next middleware immediately as per the stack
- Effectively executing any code
- Automatically terminating the request-response cycle

The most common function of middleware is validating whether the user object is properly added to your request object. 
At the end of the execution, if you don’t get the desired output or can’t find the user, you should terminate the request/response cycle. 
To validate this approach, you can use the below-given code as an example:
```
module.exports = function isLoggedIn(req, res, next) {
  if(req.user) {
    // user will be authenticated
    next();
  } else {
    // return unauthorized user
    res.send (401, ‘Unauthorized’);
  }
};
```







