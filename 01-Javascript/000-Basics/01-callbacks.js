// what is callback function in  javascript
setTimeout(function(){
    console.log("timer");
},5000);
function x(y){
console.log("x");
y();
}
x(function y(){
console.log("y");
});
// functions are first class member of javascript 
// javascript is a synchronous single-threaded language

// garbage collection and remove Event listners---- it is done because eventlistner are heavy as they take extra memory all time to free the memory we remove event listner at certain time 