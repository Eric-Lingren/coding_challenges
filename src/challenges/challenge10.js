import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";


class Challenge10 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                                ['-'] ➞ Case #1: 1 
                                ['-', '+'] ➞ Case #2: 1
                                ['+', '-'] ➞ Case #3: 2
                                ['+', '+', '+'] ➞ Case #4: 0
                                ['-', '-', '+', '-'] ➞ Case #5: 3
                            `,
            codeString :    `
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
                                    return 'Flip Count was + flipCount'
                                }
                            `,
            tests : [ 1, 1, 2, 0, 3 ],
            testResults : ''
        }
    }

    runTests = (tests) => {
        let results = ''

        tests.forEach(function(test, i) {
            let answer = `Flip Count was ${test}`

            results += ` 
                        ${answer} `
        })
        this.setState({testResults : results})
    }
    

    render(){
        return (
            <div className="challenge-container">

                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 10 - Revenge of the Pancakes </h2>
                </div>

                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                        The Infinite House of Pancakes has just introduced a new kind of pancake! It has a happy face made of chocolate chips on one side (the "happy side"), and nothing on the other side (the "blank side").
                    </p>
                    <p className='challenge-instructions-text'>
                        You are the head waiter on duty, and the kitchen has just given you a stack of pancakes to serve to a customer. Like any good pancake server, you have X­-ray pancake vision, and you can see whether each pancake in the stack has the happy side up or the blank side up. You think the customer will be happiest if every pancake is happy side up when you serve them.
                    </p>
                    <p className='challenge-instructions-text'>
                        You know the following maneuver: carefully lift up some number of pancakes (possibly all of them) fromthe top of the stack, flip that entire group over, and then put the group back down on top of any pancakes that you did not lift up. When flipping a group of pancakes, you flip the entire group in one motion; you don't  individually flip each pancake. Formally: if we number the pancakes 1, 2, ..., N  from top to bottom, you choose the top i pancakes to flip. Then, after the flip, the stack is i, i-1, ..., 2, 1, i+1, i+2, ..., N. Pancakes 1, 2, ..., i now have the opposite side up, whereas pancakes i+1, i+2, ..., N have the same side up that they had up before.
                    </p>
                    <p className='challenge-instructions-text'>
                        For example, let's denote the happy side as + and the blank side as -­. Suppose that the stack, startingfrom the top, is +­. One valid way to execute the maneuver would be to pick up the top three, flip the entire group, and put them back down on the remaining fourth pancake (which would stay where it is and remain unchanged). The new state of the stack would then be ­++­. The other valid ways would be to pick up and flip the top one, the top two, or all four. It would not be valid to choose and flip the middle two or the bottom one, for example; you can only take some number off the top.
                    </p>
                    <p className='challenge-instructions-text'>
                        You will not serve the customer until every pancake is happy side up, but you don't want the pancakes to get cold, so you have to act fast! What is the smallest number of times you will need to execute the maneuver to get all the pancakes happy side up, if you make optimal choices?
                    </p>
                </div>

                <div className='challenge-examples-container'>
                    <h3 className='challenge-examples-title'> Provided Examples: </h3>
                    <pre className='pre-wrapper'>
                        <code className="language-javascript">
                            { this.state.examplesString }
                        </code>
                    </pre>
                </div>

                <div className='code-container'>
                    <h3 className='challenge-examples-title'> My Answer Code: </h3>
                    <pre className='pre-wrapper'>
                        <code className='language-javascript'>
                            { this.state.codeString }
                        </code>
                    </pre>
                </div>

                <div className='tests-container'>
                <h3 className='challenge-examples-title'> Generate Test Results: </h3>
                    <button className='run-tests-button' onClick={() => this.runTests(this.state.tests)}> Run Tests </button>
                    <pre className='pre-wrapper-test-results'>
                        <code className='language-javascript'>
                            { this.state.testResults }
                        </code>
                    </pre>
                </div>
                
            </div>
        )
    }
}

export default Challenge10





//  REVENGE OF THE PANCAKES

// const test1 = ['-']
// const test2 = ['-', '+']
// const test3 = ['+', '-']
// const test4 = ['+', '+', '+']
// const test5 = ['-', '-', '+', '-']

// function pancakeFlipper(pancakes){
//     let happy = '+'
//     let sad = '-'
//     let flipCount = 0
    
//     if(pancakes.length === 1){
//         pancakes[0] === sad ? flipCount +=1 : null
//     }

//     for(let i=1; i<pancakes.length; i++){
//         if(pancakes[i-1] !== pancakes[i]){
//             flipCount += 1
//             if(pancakes[i-1] === sad){
//                 for(let j=0; j<i; j++ ){
//                     pancakes.splice(j, 1, happy)
//                 }
//             } else {
//                 for(let j=0; j<i; j++ ){
//                     pancakes.splice(j, 1, sad)
//                 }
//             }
//         }
//         if(i+1 === pancakes.length){
//             pancakes[i] === sad ?  flipCount +=1 : null
//         }
//     }
//     console.log(`Flip Count was ${flipCount}`)
// }

// pancakeFlipper(test1)
