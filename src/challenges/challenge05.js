import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";
import Prism from 'prismjs'


class Challenge05 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                                (10,10) ➞ 100
                                (7, 12) ➞ 84 
                            `,
            codeString :    `
                                class Shape {
                                    constructor(height, width) {
                                        this.height = height;
                                        this.width = width;
                                    }
                                    // Getter
                                    get area() {
                                        return this.calcArea();
                                    }
                                    // Method
                                    calcArea() {
                                    return this.height * this.width;
                                    }
                                }
                            `,
            tests : [ {height: 10, width: 10}, {height: 7, width: 12} ],
            testResults : ''
        }
    }

    runTests = (tests) => {
        let results = ''

        tests.forEach(function(test, i) {
            let answer = test.height * test.width
            results += ` 
                        ${answer} `
        })
        this.setState({testResults : results})
    }
    

    render(){
        return (
            <div className="challenge-container">
                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 5 - Total Area  </h2>
                </div>
                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                        Write a constructor function that creates a square or rectangle which can calculate its area
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

export default Challenge05



///////////////////////////////////////////////////////////////
//                                                           //
//                        Total Area                         //
//                                                           //
///////////////////////////////////////////////////////////////

//  Write a constructor function that creates a square or rectangle which can calculate its area

//  Example:
//  (10,10) should return 100
//  (7, 12) should return 84

// class Shape {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     // Getter
//     get area() {
//         return this.calcArea();
//     }
//     // Method
//     calcArea() {
//       return this.height * this.width;
//     }
// }

// const square = new Shape(7, 12);
// console.log(square.area);
