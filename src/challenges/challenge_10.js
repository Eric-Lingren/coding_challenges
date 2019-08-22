
//  REVENTGE OF THE PANCAKES

const test1 = ['-']
const test2 = ['-', '+']
const test3 = ['+', '-']
const test4 = ['+', '+', '+']
const test5 = ['-', '-', '+', '-']

function pancakeFlipper(pancakes){
    let happy = '+'
    let sad = '-'
    let flipCount = 0
    
    if(pancakes.length === 1){
        pancakes[0] === sad ? flipCount +=1 : null
    }

    for(let i=1; i<pancakes.length; i++){
        if(pancakes[i-1] !== pancakes[i]){
            flipCount += 1
            if(pancakes[i-1] === sad){
                for(let j=0; j<i; j++ ){
                    pancakes.splice(j, 1, happy)
                }
            } else {
                for(let j=0; j<i; j++ ){
                    pancakes.splice(j, 1, sad)
                }
            }
        }
        if(i+1 === pancakes.length){
            pancakes[i] === sad ?  flipCount +=1 : null
        }
        
    }
    console.log(`Flip Count was ${flipCount}`)
}

// pancakeFlipper(test1)
