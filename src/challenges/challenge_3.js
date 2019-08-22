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