// to access browser things from js engine we use web api
//  web api --- setTimeout(), DOM api, fetch(), localstorage,console, location 



// event loop acts like gatekeeper for callback queue amd pushes callback funtion to call stack
// event loop keeps on monitering callstack and callback queue



//  how fetch() works----  fetch goes and request api and return promise 
// fetch()-- it is  used to make network requests in the browser. It returns a Promise that resolves to the Response object


//  microtask queue --- simialr as callback queue  but has higher priority means every function which is in it get executed first

// What is in microtask queue? - all function which comes through promises and mutation obsserver goes into microtask queue  and other than this both goes to callback queue 


// starvation of callback  queue happens when  microtask queue funtion generates another microtask queue funtion and new function does the same and goes for long now callstack will not get time to execute this is starvation