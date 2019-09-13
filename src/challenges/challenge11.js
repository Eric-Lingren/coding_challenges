import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";


class Challenge11 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                    "The sunset sets at twelve o' clock." 
                    returns:
                    "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" 
            `,
            codeString :    `
                    alphabetPosition = (string) => {
                        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
                        let resultArray = []
                        
                        for(let i = 0; i < string.length; i++ ){
                            let currentLetter = string.charAt(i).toLowerCase()
                            if(alphabet.indexOf(currentLetter) > -1){
                                resultArray.push(alphabet.indexOf(currentLetter)+1)
                            }
                        }
                        
                        const resultString = resultArray.join(' ')
                        return resultString
                    }
            `,
            tests : "The sunset sets at twelve o' clock.",
            testResults : ''
        }
    }

    runTests = (tests) => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        let resultArray = []
            
            for(let i = 0; i < tests.length; i++ ){
                let currentLetter = tests.charAt(i).toLowerCase()
                if(alphabet.indexOf(currentLetter) > -1){
                    resultArray.push(alphabet.indexOf(currentLetter)+1)
                }
            }
            
        const resultString = resultArray.join(' ')
        
        
        this.setState({testResults : resultString})
    }
    

    render(){
        return (
            <div className="challenge-container">

                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 11 - Replace With Alphabet Position </h2>
                </div>

                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                        Given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. "a" = 1, "b" = 2, etc.
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

export default Challenge11




///////////////////////////////////////////////////////////////
//                                                           //
//              Replace With Alphabet Position               //
//                                                           //
///////////////////////////////////////////////////////////////


// Given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// alphabetPosition = (string) => {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let resultArray = []

//     for(let i = 0; i < string.length; i++ ){
//         let currentLetter = string.charAt(i).toLowerCase()
//         if(alphabet.indexOf(currentLetter) > -1){
//             resultArray.push(alphabet.indexOf(currentLetter))
//         }
//     }

//     const resultString = resultArray.join(' ')
//     return resultString
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))