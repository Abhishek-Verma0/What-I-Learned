/**Event Loop in JavaScript

The event loop is a fundamental concept in JavaScript, enabling non-blocking, asynchronous behavior in a single-threaded environment. JavaScript is single-threaded, meaning it can execute one operation at a time. However, with the help of the event loop, it can handle asynchronous tasks like network requests, timers, or user interactions efficiently





Core Concepts

1. Call Stack

    The call stack is a data structure where function calls are stored and executed in a last-in, first-out (LIFO) manner.

    Whenever a function is called, it gets pushed onto the stack. When the function completes execution, it is popped off the stack.

2. Web APIs (or Environment)

    Web APIs are provided by the browser (or Node.js in a server environment) and handle tasks like setTimeout, fetch, DOM manipulation, and more.

    These APIs operate outside the call stack, allowing JavaScript to delegate tasks and free up the call stack for other operations.

3.  Task Queue (or Callback Queue)

    The task queue holds callbacks from asynchronous operations such as setTimeout or events like click.

    When the call stack is empty, the event loop picks tasks from the task queue and pushes them onto the call stack for execution.

4.  Microtask Queue

    Microtasks include Promises and the MutationObserver API.

    The microtask queue has higher priority than the task queue. This means all microtasks are executed before tasks in the task queue.




##How the Event Loop Works

1.  Execution Starts:

    JavaScript starts executing the code line-by-line, pushing and popping functions onto/from the call stack.

2.  Handling Asynchronous Tasks:

    When an asynchronous task is encountered (e.g., setTimeout), the browser or Node.js moves it to the Web API.

    Once the task completes, the corresponding callback is queued in the task queue.

3.  Processing the Task Queue:

    The event loop continuously monitors the call stack and task queue.

    If the call stack is empty, the event loop picks the first task from the task queue and pushes it onto the call stack for execution.

4.  Microtasks Take Precedence:

    If there are any microtasks, they are executed before moving to the next task in the task queue.



    example below
*/

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");


/**
 * Execution Flow

1.  Synchronous Code:

    "Start" is logged immediately (synchronous).

    "End" is logged immediately after (synchronous).

2.  Microtask:

    The Promise callback is pushed to the microtask queue and executed before the task queue.

3.  Task:

     The setTimeout callback is executed after the microtask queue is cleared.


     OUTPUT FOR THE ABOVE EXAMPLE
        Start
        End
        Promise callback
        Timeout callback

        
 */