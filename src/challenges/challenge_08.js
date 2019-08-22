

// Given a string: 'aaabbbcc' return  'a3b3c2'
// or 'aaaabbccc'  =>  'a4b3c3'    you know what I mean
// a4b2c3 for the above..

function stringCount(str){
    let splitStr = str.split('')
    let aCount = 0
    let bCount = 0
    let cCount = 0
    for(let i=0; i<splitStr.length; i++){
        if(splitStr[i] === 'a'){
            aCount += 1
        } else if(splitStr[i] === 'b'){
            bCount += 1
        } else {
            cCount += 1
        }
    }
    let result = `a${aCount}b${bCount}c${cCount}`
    return result
}

// console.log(stringCount('aaabbbcc'))
// console.log(stringCount('aaaabbccc'))
