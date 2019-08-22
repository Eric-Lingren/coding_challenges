import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";
import Prism from 'prismjs'

class Challenge01 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                                test1 = addition(3, 2) ➞ 5
                                test2 = addition(-3, -6) ➞ -9
                                test3 = addition(7, 3) ➞ 10
                            `,
            codeString :    `
                                addition(a, b) => a + b
                            `,
            tests : [ {a: 3, b: 2}, {a: -3, b: -6}, {a: 7, b: 3} ],
            testResults : ''
        }
    }

    runTests = (tests) => {
        let results = ''
        tests.forEach(function (test, i) {
            let answer = test.a + test.b

            results += ` 
                        ${answer} `
        })
        this.setState({testResults : results})
    }

    render(){
        return (
            <div className="challenge-container">
                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 1 - Simple Sum </h2>
                </div>
                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                        Create a function that takes two numbers as arguments and return their sum.
                    </p>
                </div>

                <div className='challenge-examples-container'>
                    <h3 className='challenge-examples-title'> Examples: </h3>
                    <pre className='pre-wrapper'>
                        <code className="language-javascript">
                            { this.state.examplesString }
                        </code>
                    </pre>
                </div>

                <div className='code-container'>
                    <h3 className='challenge-examples-title'> Code: </h3>
                    <pre className='pre-wrapper'>
                        <code className='language-javascript'>
                            { this.state.codeString }
                        </code>
                    </pre>
                </div>

                <div className='tests-container'>
                <h3 className='challenge-examples-title'> Test Results: </h3>
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

export default Challenge01


