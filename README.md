# JS Closures

## Concepts

### The Function Data Type
I know this is super basic, but let's begin by talking about the function data type. Here's the syntax for declaring and invoking a function:

```
function doSomething() {
   console.log("I'm trying!")
}

doSomething()
```

### Function Declarations vs. Function Expressions
#### Declaration:
```
function declareThis(param1, param2) {

}
```

#### Function Expression:
```
var expressThis = function(param1, param2) {

}
```

### Hoisting
The only difference between the function declaration and the function expression is the order in which the JavaScript engine processes them. The declared function will be registered (in the execution context--see below) before any other code is run. So you can call the function before you write the declaration. 

```
callMe()

function callMe() {
   // This function will still work
}
```

Function expressions, however, are not hoisted. They are processed in sequential order with the rest of the statements in the script. Thus:

```
// This will throw an 'unexpected identifier' error.
dontCallMeYet()

var dontCallMeYet = function() {

}
```

To get the benefits of hoisting, you should always prefer function declarations, except in the case of closures, which we will cover today.

### Execution Context
The execution context, as you studied yesterday, includes the variables and functions available to the function that is called. It also sets the value of the this keyword. 

```
var available;
function whatIsMyContext() {
   return '?'
}

whatIsMyContext()
```

The execution context for whatIsMyContext is the global scope, and in addition to the whatIsMyContext function, there is one other variable available, available. 

Now whatIsMyContext can access available because it contains a reference to the parent's execution object.

### Scope Chains, Activation Objects, and Variable Objects
When a function is called, an activation object is created, and this object contains a variable object with all of its local variables. The first two variables available to it are 'this' and 'arguments.'

In addition to these variables, it also has any local variables created in the function placed in its variable object. 

Finally, it has access to the variable objects in the containing execution context(s). Thus, it has a scope chain, which contains its variables and its parents. 

```
var windowVariable;
function grandparentFunction() {
   var grandparentVariable;

   function parentFunction() {
      var parentVariable;

      function childFunction() {
         var childVariable;
      }
   }
}
```
### Garbage Collection
When a function is finished executing, the variables in the scope of that function are marked for reassignment (except in the case of closures, as we'll discuss). 

### Four Ways of Assigning Context
Just by way of review, let's discuss the four ways of assigning the context of this:
- Implicit
- Explicit
- new keyword
- window

### Constructor Functions
```
function Car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
}
```

### Prototypes
```
function Car() {}
Car.prototype.makeNoise = function() {
   return "Vroom"
}
```

### Factories
The factory pattern is often used to create single objects, particularly for app-wide data. We'll also see a variation of this in closures, one called the module pattern. 
```
function carMaker(make, model, year) {
   return {
      make: make,
      model: model,
      year: year
   }
}
```

### Closures - Basics
```
function outer() {
   var initialValue = 1;
   function inner(num) {
      return initialValue + num;
   }

   return inner;
}
```
### Closures - Alternative Syntax
```
function outer() {
   var initialValue = 1;
   return function (num) {
      return initialValue + num;
   }
}
```

### Closures - Function Creators
```
function greeterMaker(name) {
   return function(greeting) {
      return greeting + ', ' + name;
   }
}

var greetBrian = greeterMaker('brian')
greetBrian("Good morning")
greetBrian("Buenas tardes")
greetBrian("Wilkommen")
```

### Closures - Scope Preservers
```
function createTeam(teamName) {
   var team = {
      name: teamName,
      players: []
   }

   function createPlayer(playerName){
      team.players.push(playerName)
      return team
   }

   return createPlayer
}
```

### Closures - Module Pattern
```
function createUser(name) {
   var name = name
   var score = 0
   
   function getScore() {
      return score
   }
   function updateScore(update) {
      score += score
      return score
   }

   return {
      name: name,
      getScore: getScore,
      updateScore: updateScore
   }
}

```
### Closures - Cautions



### Additional Thoughts
#### Private variables
- Why we might want to protect variables
- Polluting the global scope

#### IIFEs
```
(function() {
   var num = 1;
   num++;
   console.log(num)
})()
```

## Practice with Closures

The exercises in the closure-practice.js file are meant to give you more practice with closures in JavaScript. The SpecRunner in index.html should give you feedback about your tests. Good luck!