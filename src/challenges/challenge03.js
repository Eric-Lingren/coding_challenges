import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";
import Prism from 'prismjs'


class Challenge03 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                                [1,2,1,2] ➞ [[1,1], [2,2]]
                            `,
            codeString :    `
                            function subArrays(inputArr){
                                let checkedNumbers = [ ]
                                let finalArr = [ ]
                            
                                for(let i = 0; i < inputArr.length; i++){
                                    let hasBeenChecked = checkedNumbers.some(number => number === inputArr[i])
                                    if(!hasBeenChecked){
                                        checkedNumbers.push(inputArr[i])
                                        let filtered = inputArr.filter(number => number === inputArr[i])
                                        finalArr.push(filtered)
                                    }
                                }
                                return finalArr
                            }
                            `,
            tests : [1,2,1,2],
            testResults : ''
        }
    }

    runTests = (inputArr) => {
        let results = ''

        let checkedNumbers = [ ]
        let finalArr = [ ]
        for(let i = 0; i < inputArr.length; i++){
            let hasBeenChecked = checkedNumbers.some(number => number === inputArr[i])
            if(!hasBeenChecked){
                checkedNumbers.push(inputArr[i])
                let filtered = inputArr.filter(number => number === inputArr[i])
                finalArr.push(filtered)
            }
        }
        console.log(finalArr)
        results += ` 
                        ${finalArr} 

                        Arrays don't print on screen correctly.
                        Check the console for properly formatted result...`

        this.setState({testResults : results})
    }
    

    render(){
        return (
            <div className="challenge-container">
                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 3 - SubArrays </h2>
                </div>
                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                        Write a function which takes in an array of numbers and puts all the same values in subarrays.
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

export default Challenge03



///////////////////////////////////////////////////////////////
//    Write a function which takes in an array of numbers    //
//      and puts all the same values in subarrays. For       //
//      example [1,2,1,2] should return [[1,1], [2,2]]       //
///////////////////////////////////////////////////////////////

// const inputArr = [1,2,1,2]

// function subArrays(inputArr){
//     let checkedNumbers = []
//     let finalArr = []

//     for(let i = 0; i < inputArr.length; i++){
//         let hasBeenChecked = checkedNumbers.some(number => number === inputArr[i])
//         if(!hasBeenChecked){
//             checkedNumbers.push(inputArr[i])
//             let filtered = inputArr.filter(number => number === inputArr[i])
//             finalArr.push(filtered)
//         }
//     }
//     console.log(finalArr)
// }

// subArrays(inputArr)