import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";


class Challenge09 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                                65 ➞  'A'
                                77 ➞  'M'  
                                43 ➞  '+'
                                63 ➞  '?'
                            `,
            codeString :    `
                                getChar(code) => String.fromCharCode(code)
                            `,
            tests : [ 65, 77, 43, 63 ],
            testResults : ''
        }
    }

    runTests = (tests) => {
        let results = ''

        tests.forEach(function(str, i) {
            let answer = String.fromCharCode(str)
            
            results += ` 
                        ${answer} `
        })
        this.setState({testResults : results})
    }
    

    render(){
        return (
            <div className="challenge-container">

                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 9 - ASCII Characters </h2>
                </div>

                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                    /Write a function which takes a number and returns the corresponding ASCII char for that value.
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

export default Challenge09




//Write a function which takes a number and returns the corresponding ASCII char for that value.

//Example:
//get_char(65) # => 'A'

// function getChar(c){
//     return String.fromCharCode(c)
// }

// console.log(getChar(55))
// console.log(getChar(62))
// console.log(getChar(65))
// console.log(getChar(58))
