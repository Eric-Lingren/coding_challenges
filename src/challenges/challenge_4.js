
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