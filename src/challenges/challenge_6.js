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