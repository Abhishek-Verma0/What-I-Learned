//  map ,filter ,reduce are higher  order functions


// map function is used to transform an array means getting new value for each and every value of array  ... we pass a function in map function
 const arr=[5,1,3,2,6];
// function double(x){
//     return x*2;
// }
// const output=arr.map(double);// this will run double function at every value of array and return a new array with double values of original

// function binary(x){               // this function converts number to its binary
//     return x.toString(2);
// }
// const output =arr.map(binary);
// console.log(output);




//  **********Filter*********
//  used to filter values in array  based on some condition

// filter odd values
// function isOdd(x){
//     return x%2;
// }
// const output=arr.filter(isOdd);
// console.log(output);
//  for even values
// function isEven(x){
//     return x%2==0;
// }
// const output=arr.filter(isEven);
// console.log(output);


// ***********Reduce***********

// reduce array not reduce anything so don't be confused with it's name

// used at place where we take all values of array and we come up with single value as output

//   sum  or max with and without reduce

function find(arr){
    let sum=0;
    for (let i = 0; i <arr.length; i++) {
        sum=sum+arr[i];
        
    }
    return sum;
}
console.log(find(arr));

//  now we use reduce  method
// acc- accumaltor accumelate  the sum or anything   , curr - current element of array
const output=arr.reduce(function(acc,curr){ 
    acc=acc+curr;  //acc=sum and curr=arr[i] 
    return acc;
},0 ) // here we give some  initial value to acc as acc needs to be initialise with some value
console.log(output);
    