//Create a function that takes two numbers as arguments and return their sum.

// Examples:
// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

function addition(a, b) {
    let sum = a + b
    console.log(sum)
}

// addition(7,3)


https://github.com/insideoutdevelopment/devguide.git

///////////////////////////////////////////////////////////////
//      Return the Next Number from the Integer Passed       //
///////////////////////////////////////////////////////////////

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples:
// addition(0) ➞ 1
// addition(9) ➞ 10

function addition(num){
    num++
    console.log(num)
}

// addition(0)




///////////////////////////////////////////////////////////////
//    Write a function which takes in an array of numbers    //
//      and puts all the same values in subarrays. For       //
//      example [1,2,1,2] should return [[1,1], [2,2]]       //
///////////////////////////////////////////////////////////////

const inputArr = [1,2,1,2]

function subArrays(inputArr){
    let checkedNumbers = []
    let finalArr = []

    for(let i = 0; i < inputArr.length; i++){
        let hasBeenChecked = checkedNumbers.some(number => number === inputArr[i])
        if(!hasBeenChecked){
            checkedNumbers.push(inputArr[i])
            let filtered = inputArr.filter(number => number === inputArr[i])
            finalArr.push(filtered)
        }
    }
    console.log(finalArr)
}

// subArrays(inputArr)






///////////////////////////////////////////////////////////////
//                                                           //
//                     3 Longest Words                       //
//                                                           //
///////////////////////////////////////////////////////////////

//  Write a function that takes an array of words and returns the 3 longest adjacent words as the result

//  Example:
//  [ "this", "is", "an", "array"] should return ["is", "an", "array"]

function combined(arr){
    let max = 0;
    let result = []
    for(let i = 0; i < arr.length - 2; i++){
        let currentLength = arr[i].length + arr[i + 1].length + arr[i + 2].length
        let currentWords = [arr[i], arr[i + 1], arr[i + 2]]
        if(currentLength > max){
            result = currentWords
            max = currentLength
        }
    }
    console.log(result)
}

// combined(["this", "is", "an", "array"])






///////////////////////////////////////////////////////////////
//                                                           //
//                        Total Area                         //
//                                                           //
///////////////////////////////////////////////////////////////

//  Write a constructor function that creates a square or rectangle which can calculate its area

//  Example:
//  (10,10) should return 100
//  (7, 12) should return 84

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
}

// const square = new Rectangle(7, 12);
// console.log(square.area);






///////////////////////////////////////////////////////////////
//                                                           //
//                        X's & O's                          //
//                                                           //
///////////////////////////////////////////////////////////////

//  Write a function that determines if a string has the same number of X's and O's

//  Example:
//  "ooxxxxx" should return false
//  "oXxOox" should return true

function XO(str) {
    let x = str.toLowerCase().split('').filter(x => x === 'x').length;
    let o = str.toLowerCase().split('').filter(x => x === 'o').length;
    console.log( x === o );
}

// XO("oXxOox")




//Next bigger number with the same digits

// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1


function nextBigger(n){
    let numSplit = n.toString().split('')
    let numbersArray = []
    for(let i = 0; i < numSplit.length; i++){
        let numStringtoNumber = parseInt(numSplit[i])
        numbersArray.push(numStringtoNumber)
    }

    let originalNumberSorted = numbersArray.sort()
    let maxNumberPossible = parseInt(originalNumberSorted.reverse().join(''))
    
    if(maxNumberPossible === n){
        return -1
    } 
    
    let newNumber = 0
    for(let i = n+1; i <= maxNumberPossible; i++){
        newNumber = i
        let newNumberArrayString = newNumber.toString().split('')

        let newNumbersArrayNumbers = []
        newNumberArrayString.forEach(number => newNumbersArrayNumbers.push(parseInt(number)) )

        let newNumberSortedArray = newNumbersArrayNumbers.sort().reverse()

        let string1 = originalNumberSorted.join('')
        let string2 = newNumberSortedArray.join('')

        if(string1 === string2){
            return newNumber
        } 
    }    
}

console.log(nextBigger(12))
console.log(nextBigger(513))
console.log(nextBigger(2017))
console.log(nextBigger(9))
console.log(nextBigger(111))
console.log(nextBigger(531))