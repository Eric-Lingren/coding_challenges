import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";
// import Prism from 'prismjs'


class Challenge06 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                                "ooxxxxx" ➞ false
                                "oXxOox" ➞ true
                            `,
            codeString :    `
                                function XO(str) {
                                    let x = str.toLowerCase().split('').filter(letter => letter === 'x').length
                                    let o = str.toLowerCase().split('').filter(letter => letter === 'o').length
                                    return x === o 
                                }
                            `,
            tests : [ "ooxxxxx", "oXxOox" ],
            testResults : ''
        }
    }

    runTests = (tests) => {
        let results = ''

        tests.forEach(function(test, i) {
                let x = test.toLowerCase().split('').filter(letter => letter === 'x').length;
                let o = test.toLowerCase().split('').filter(letter => letter === 'o').length;
                let answer = x === o 
            results += ` 
                        ${answer} `
        })
        this.setState({testResults : results})
    }
    

    render(){
        return (
            <div className="challenge-container">

                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 6 - X's & O's </h2>
                </div>

                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                        Write a function that determines if a string has the same number of X's and O's
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

export default Challenge06



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