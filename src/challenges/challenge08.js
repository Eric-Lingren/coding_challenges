import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";


class Challenge08 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                                'aaabbbcc' ➞  'a3b3c2'
                                'aaaabbccc'  ➞  'a4b3c3'  
                            `,
            codeString :    `
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
                                    let result = a+aCount+b+bCount+c+cCount
                                    return result
                                }
                            `,
            tests : [ 'aaabbbcc', 'aaaabbccc' ],
            testResults : ''
        }
    }

    runTests = (tests) => {
        let results = ''

        tests.forEach(function(str, i) {
            let answer = ''
            
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
            answer = `a${aCount}b${bCount}c${cCount}`
            
            results += ` 
                        ${answer} `
        })
        this.setState({testResults : results})
    }
    

    render(){
        return (
            <div className="challenge-container">

                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 8 - String Count </h2>
                </div>

                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                        Write a function that retuns the number of characters in a string.
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

export default Challenge08




// Given a string: 'aaabbbcc' return  'a3b3c2'
// or 'aaaabbccc'  =>  'a4b3c3'  

// function stringCount(str){
//     let splitStr = str.split('')
//     let aCount = 0
//     let bCount = 0
//     let cCount = 0
//     for(let i=0; i<splitStr.length; i++){
//         if(splitStr[i] === 'a'){
//             aCount += 1
//         } else if(splitStr[i] === 'b'){
//             bCount += 1
//         } else {
//             cCount += 1
//         }
//     }
//     let result = `a${aCount}b${bCount}c${cCount}`
//     return result
// }

// console.log(stringCount('aaabbbcc'))
// console.log(stringCount('aaaabbccc'))
