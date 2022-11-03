// 1 to 10 number summation
var n = 0
for(var i =1; i<=10; i++){
       console.log(n + '+' + i + '=' + (n+i))  
       n += i 
}
console.log('total summation is: ' + n)


// Check the number is even or odd
var i = 253453455876555
if(i % 2 === 0){
    console.log(i + ' is a even number')
} else{
    console.log(i + ' is a odd number')
}

// Chek the number is prime or composite
var check = 59
// var isPrime = true
for (var i = 2; i<check; i++){
    if(check % i === 0){
        // isPrime = false
        // break
        console.log(check + ' is a composite number')
        break
    } else{
        console.log(check + ' is a prime number')
        break
    }
}
// if(isPrime){
//     console.log(check + ' is a prime number.')
// } else{
//     console.log(check + ' is a composite number')
// }


// create the following pattern
// 1
// 12
// 123
// 1234
// 12345
for(var i = 1; i<=5; i++){
    var result = ''
    for(var j = 1; j<=i; j++){
        result+= j
    }
    console.log(result)
}


// Insert Some students with their Roll Number, Name, and marks
// of five subject [ Bangla, Math, English, Religious Study, Science].
// If any student has failed delete the student with showing a
// message to the console. Grouping the students who have Obtain
// A+ , A & B by calculating their average grade.

var someStudents = {
    176790: ['Promi', [62, 75, 85, 88, 68]],
    176791: ['Utsho', [82, 85, 75, 88, 68]],
    176792: ['Al Amin', [82, 85, 75, 88, 68]],
    176793: ['Riaz', [72, 58, 85, 98, 68]],
    176794: ['Ahmed', [92, 55, 65, 88, 78]],
    176795: ['Zunaiyed', [72, 95, 75, 68, 68]],
    176796: ['Babu', [22, 85, 95, 58, 68]],
    176797: ['Rashed', [92, 85, 65, 87, 88]],
    176798: ['Rishad', [54, 65, 76, 88, 67]],
    176799: ['Akash', [32, 55, 85, 88, 58]],
    176800: ['Mosabbir', [62, 55, 35, 28, 68]]
}

for(var i in someStudents){
    for(var nn = 0; nn<someStudents[i].length; nn++){
        console.log(i + ': ' + someStudents[i][nn])
    }    
   }