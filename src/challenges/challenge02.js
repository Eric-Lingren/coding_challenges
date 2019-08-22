import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";
import Prism from 'prismjs'

class Challenge02 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                                increment(0) ➞ 1
                                increment(9) ➞ 10
                            `,
            codeString :    `
                                increment(num) => num++
                            `,
            tests : [ 0, 9 ],
            testResults : ''
        }
    }

    runTests = (tests) => {
        let results = ''

        tests.forEach(function(test, i) {
            test++
            let answer = test

            results += ` 
                        ${answer} `
        })

        this.setState({testResults : results})
    }
    

    render(){
        return (
            <div className="challenge-container">
                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 2 - Return the Next Number from the Integer Passed </h2>
                </div>
                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                        Create a function that takes a number as an argument, increments the number by +1 and returns the result.
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

export default Challenge02


///////////////////////////////////////////////////////////////
//      Return the Next Number from the Integer Passed       //
///////////////////////////////////////////////////////////////

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples:
// addition(0) ➞ 1
// addition(9) ➞ 10

// function addition(num){
//     num++
//     console.log(num)
// }

// addition(0)

