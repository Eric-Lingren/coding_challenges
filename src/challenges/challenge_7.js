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

// console.log(nextBigger(12))
// console.log(nextBigger(513))
// console.log(nextBigger(2017))
// console.log(nextBigger(9))
// console.log(nextBigger(111))
// console.log(nextBigger(531))