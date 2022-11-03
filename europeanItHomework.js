// European IT homework 2-nov-2022


// Task related to Array: (45 Marks): 
 /* Write programs for concat(),  every(), fill(), filter(), find(), findIndex(),
 forEach(), from(), includes(), isArray(), join(), map(),
  pop(), push(), reverse(), shift(), slice(), some(),
   sort(), splice() and unshift() methods.  */
   
// concat method 
   let arr = [10, 20, 30, 40, 50, 60]
   let arr2 = [2, 4, 6, 8, 10]
   let arrConcat = arr.concat(arr2) 

// fill method
//  fill method overwrites the original array
// syntax: array.fill(value, start, end)
let testFill = [100, 400, 534, 434, 43, 434, 43 , 43, 555]
testFill.fill('hello', 2, 5)


// forEach method
//syntax: arr.forEach(value, index, array){}
  arr.forEach(function(value, index, arr){     
   if(value< 40){
      console.log(value + ' is less then 40')
   }
 })


// findIndex method
// Finding the index number whitch is greater than 300
   let testFindIndex = [100, 200, 300, 400, 500]
   console.log(testFindIndex.findIndex(function(a){
         return a > 300
   }))


// from method
let fromTest = [150, 300, 450, 600]
let fromTest2 = Array.from(fromTest) // An independent array create from anothe array

// isArray method
let nnx = [20, 30]
console.log(Array.isArray(nnx))

// join method - returns an array as a string
let testJoin = [300, 500, 600]
console.log(testJoin.join(' '))

// slice  method
let testSlice = ['Utsho', 'Durjoy', 'Shakil', 'Rubel', 'Seyam']
console.log(testSlice.slice(1, 3))

// splice method
let testSplice = [2, 4, 4384, 4394, 6, 756, 434]
testSplice.splice(2, 2, 55, 555)
console.log(testSplice)

// push , unshift, pop and shift method 
let testPushAndPop = ['Ahashan', 'Habib']
testPushAndPop.push('Utsho') //insert new items to the end of an array
testPushAndPop.unshift('Muhammad') //insert new items to the start of an array
testPushAndPop.pop() //remove last item to the end of an array
testPushAndPop.shift() //remove first item to the start of an array

// reverse method
let testReverse = ['hey', 'Hello', 'Whats up']
testReverse.reverse()

// every and some method - returns boolean value
let testEveryAndSome = [30, 35, 40, 50, 60, 80]
let arrEvery = testEveryAndSome.every(function (values, index, arr){
   return values > 29
}) 
console.log(arrEvery)

let arrSome = testEveryAndSome.some(function(values, index, arr){
      return values < 33
})
console.log(arrSome)


// Write a program for concatenation two array (using spread operator).
let sprdArray1 = [50, 60, 70]
let sprdArray2 = [80, 90, 100]
let sprdArray3 = [...sprdArray1, ...sprdArray2]
console.log(sprdArray3)







//-- Task related to Object: (20 Marks) --//

//Write programs for entries(), hasOwn(), keys(), values() methods.
let obj = {
   name: 'Utsho',
   age: 22,
   nationality: 'Bangladeshi',
}
let testObjKeys = Object.keys(obj) // return keys as an array from object
let testObjValues = Object.values(obj) // return values as an array from object
let testObjEntries = Object.entries(obj) // return keys and values as an array from object
let testObjHasOwn = Object.hasOwn(obj, 'age') // return boolean value after check specific property is here or not

//Write a program for merging two object (using spread operator).
let obj1 = {
   a : 1,
   b : 2,
   c : 3
}
let obj2 = {
   z : 100,
   y : 99,
   x : 98
}
let obj3 = {...obj1, ...obj2}
console.log(obj3)





//-- Task related to Loop: (15 Marks) --//
// Write a program using simple for loop.
for(let i = 0; i<10; i++){
   let randomNumber = Math.round(Math.random()*10)
   if(randomNumber === 7){
      console.log('Yess, you got the lucky number')
      break
   } else{
      console.log('You got ' + randomNumber)
   }
}

// Write a program using for-of loop.
let testForOf = [10, 20, 30, 40, 50]
for(let i of testForOf){
   console.log(i)
}

// Write a program using for-in loop.
let testForIn = {
   name: 'Utsho',
   age: 22
}
for(let i in testForIn){
   console.log(i + ": " + testForIn[i])
}
