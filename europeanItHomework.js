// European IT homework 2-nov-2022

/* Task related to Array: (45 Marks):
 Write programs for concat(),  every(), fill(), filter(), find(), findIndex(),
 forEach(), from(), includes(), isArray(), join(), map(),
  pop(), push(), reverse(), shift(), slice(), some(),
   sort(), splice() and unshift() methods. 
Write a program for concatenation two array (using spread operator). */

let arr = [10, 20, 30, 40, 50, 60]
let arr2 = [2, 4, 6, 8, 10]

// concat method
let arrConcat = arr.concat(arr2) 


// fill method
// fill method overwrites the original array
/* let arrFill = arr.fill('hello' , 1, 4)
console.log(arrFill) */


// forEach method
//syntax: arr.forEach(value, index, array){}
  arr.forEach(function(value, index, arr){     
   if(value< 40){
      console.log(value + ' is less then 40')
   }
 })


//findIndex method
//Finding the index number whitch is greater than 300
let testFindIndex = [100, 200, 300, 400, 500]
console.log(testFindIndex.findIndex(function(a){
       return a > 300
}))


// from method
let fromTest = [150, 300, 450, 600]
let fromTest2 = Array.from(fromTest)
fromTest2[2] = 40
console.log(fromTest2)

// every method
// let arrEvery = arr.every(function (num){
//    return num < 12
// }) 
// console.log(arrEvery)

// let arrEvery2 = arr.every(mmx)
// console.log(arrEvery2)
// function mmx (num2){
//    return num2 < 20
// }

// some method



// Task related to Object: (20 Marks)
// Write programs for entries(), hasOwn(), keys(), values() methods.
// Write a program for merging two object (using spread operator).
var count = [1, 2, 3, 4, 5];
console.log(count);