## What is an IIFE, what is the use of it?
↑ An IIFE or Immediately Invoked Function Expression is a function that is gonna get invoked or executed after its creation or declaration. The syntax for creating IIFE is that we wrap the function (){} inside a parentheses () or the Grouping Operator to treat the function as an expression and after that we invoke it with another parentheses (). So an IIFE looks like this (function(){})().

- Immediately-invoked function expressions.

- A design pattern used by most popular libraries to place all library code inside of a local scope.

- No global property is created for the function (anonymous function expression).

- All of the properties created inside of the function expression are scoped locally.

- Encapsulation, preserve the global namespace as any variables declared within the function body will be local to the closure but will still live throughout runtime.
```
(function () {

}());

(function () {

})();

(function named(params) {

})();

(() => {

})();

(function (global) {

})(window);

const utility = (function () {
   return {
      //utilities
   };
})();
```
These examples are all valid IIFE. The second to the last example shows we can pass arguments to an IIFE function. The last example shows that we can save the result of the IIFE to a variable so we can reference it later.

The best use of IIFE is making initialization setup functionalities and to avoid naming collisions with other variables in the global scope or polluting the global namespace. Let's have an example.
```
<script src="https://cdnurl.com/somelibrary.js"></script>
```
Suppose we have a link to a library somelibrary.js that exposes some global functions that we use can in our code but this library has two methods that we don't use createGraph and drawGraph because these methods have bugs in them. And we want to implement our own createGraph and drawGraph methods.

One way of solving this is by changing the structure of our scripts.
```
<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
   function createGraph() {
      // createGraph logic here
   }
   function drawGraph() {
      // drawGraph logic here
   }
</script>
```
When we use this solution we are overriding those two methods that the library gives us.

Another way of solving this is by changing the name of our own helper functions.
```
<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
   function myCreateGraph() {
      // createGraph logic here
   }
   function myDrawGraph() {
      // drawGraph logic here
   }
</script>
```
When we use this solution we will also change those function calls to the new function names.

Another way is using an IIFE.
```
<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
   const graphUtility = (function () {
      function createGraph() {
         // createGraph logic here
      }
      function drawGraph() {
         // drawGraph logic here
      }
      return {
         createGraph,
         drawGraph
      }
   })();
</script>
```
In this solution, we are making a utility variable that is the result of IIFE which returns an object that contains two methods createGraph and drawGraph.

Another problem that IIFE solves is in this example.
```
var li = document.querySelectorAll('.list-group > li');
for (var i = 0, len = li.length; i < len; i++) {
   li[i].addEventListener('click', function (e) {
      console.log(i);
   })
}
```
Suppose we have a ul element with a class of list-group and it has 5 li child elements. And we want to console.log the value of i when we click an individual li element.
But the behavior we want in this code does not work. Instead, it logs 5 in any click on an li element. The problem we're having is due to how Closures work. Closures are simply the ability of functions to remember the references of variables on its current scope, on its parent function scope and in the global scope. When we declare variables using the var keyword in the global scope, obviously we are making a global variable i. So when we click an li element it logs 5 because that is the value of i when we reference it later in the callback function.

One solution to this is an IIFE.
```
var li = document.querySelectorAll('.list-group > li');
for (var i = 0, len = li.length; i < len; i++) {
   (function (currentIndex) {
      li[currentIndex].addEventListener('click', function (e) {
         console.log(currentIndex);
      })
   })(i);
}
```
This solution works because of the reason that the IIFE creates a new scope for every iteration and we capture the value of i and pass it into the currentIndex parameter so the value of currentIndex is different for every iteration when we invoke the IIFE.

## 10ways 
```js
~function () {console.log("Hi I'm IIFE 1")}();
!function () {console.log("Hi I'm IIFE 2")}();
+function () {console.log("Hi I'm IIFE 3")}();
-function () {console.log("Hi I'm IIFE 4")}();
(function () {console.log("Hi I'm IIFE 5")}())
var i = function(){console.log("Hi I'm IIFE 6")}();
true && function(){console.log("Hi I'm IIFE 7")}();
0, function(){console.log("Hi I'm IIFE 8")}();
new function(){console.log("Hi I'm IIFE 9")};
new function(){console.log("Hi I'm IIFE 10")}();
```