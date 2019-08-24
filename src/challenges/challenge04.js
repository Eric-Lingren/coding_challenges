import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";


class Challenge04 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                                [ "this", "is", "an", "array"] ➞ ["is", "an", "array"]
                            `,
            codeString :    `
                                function combined(arr){
                                    let max = 0;
                                    let result = []
                                    for(let i = 0; i < arr.length - 2; i++){
                                        let currentLength = arr[i].length + arr[i + 1].length + arr[i + 2].length
                                        let currentWords = [arr[i], arr[i + 1], arr[i + 2]]
                                        if(currentLength > max){
                                            result = currentWords
                                            max = currentLength
                                        }
                                    }
                                    return result
                                }
                            `,
            tests : ["this", "is", "an", "array"],
            testResults : ''
        }
    }

    runTests = (arr) => {
        let results = ''

        let max = 0;
        let result = []
        for(let i = 0; i < arr.length - 2; i++){
            let currentLength = arr[i].length + arr[i + 1].length + arr[i + 2].length
            let currentWords = [arr[i], arr[i + 1], arr[i + 2]]
            if(currentLength > max){
                result = currentWords
                max = currentLength
            }
        }
        console.log(result)
        results += ` 
                        [ ${result} ] 

                        Arrays don't print on screen correctly.
                        Check the console for a properly formatted result...
                        `

        this.setState({testResults : results})
    }
    

    render(){
        return (
            <div className="challenge-container">
                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 4 - Three Longest Words </h2>
                </div>
                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                        Write a function that takes an array of words and returns the 3 longest adjacent words as the result
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

export default Challenge04



///////////////////////////////////////////////////////////////
//                                                           //
//                     3 Longest Words                       //
//                                                           //
///////////////////////////////////////////////////////////////

//  Write a function that takes an array of words and returns the 3 longest adjacent words as the result

//  Example:
//  [ "this", "is", "an", "array"] should return ["is", "an", "array"]

// function combined(arr){
//     let max = 0;
//     let result = []
//     for(let i = 0; i < arr.length - 2; i++){
//         let currentLength = arr[i].length + arr[i + 1].length + arr[i + 2].length
//         let currentWords = [arr[i], arr[i + 1], arr[i + 2]]
//         if(currentLength > max){
//             result = currentWords
//             max = currentLength
//         }
//     }
//     console.log(result)
// }

// combined(["this", "is", "an", "array"])