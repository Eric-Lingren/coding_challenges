import React, { Component }  from 'react';
import './challengeStyles.css';
import "./prism.css";


class Challenge07 extends Component {
    constructor(){
        super()
        this.state = {
            examplesString : `
                                12 ➞ 21
                                513 ➞ 531
                                2017 ➞ 2071

                                // If no bigger number can be composed using those digits, return -1:
                                9 ➞ -1
                                111 ➞ -1
                                531 ➞ -1
                            `,
            codeString :    `
                                function nextBigger(n){
                                    let numSplit = n.toString().split('')
                                    let numbersArray = []

                                    for(let i = 0; i < numSplit.length; i++){
                                        let numStringtoNumber = parseInt(numSplit[i])
                                        numbersArray.push(numStringtoNumber)
                                    }
                                
                                    let originalNumberSorted = numbersArray.sort()
                                    let maxNumberPossible = parseInt(originalNumberSorted.reverse().join(''))
                                    
                                    if(maxNumberPossible === n){
                                        return -1
                                    } 
                                    
                                    let newNumber = 0
                                    for(let i = n+1; i <= maxNumberPossible; i++){
                                        newNumber = i
                                        let newNumberArrayString = newNumber.toString().split('')
                                        let newNumbersArrayNumbers = []
                                        newNumberArrayString.forEach(number => newNumbersArrayNumbers.push(parseInt(number)) )
                                        let newNumberSortedArray = newNumbersArrayNumbers.sort().reverse()
                                        let string1 = originalNumberSorted.join('')
                                        let string2 = newNumberSortedArray.join('')
                                        
                                        if(string1 === string2){
                                            return newNumber
                                        } 
                                    }    
                                }
                            `,
            tests : [ 12, 513, 2017, 9, 111, 531 ],
            testResults : ''
        }
    }

    runTests = (tests) => {
        let results = ''

        tests.forEach(function(n, i) {
            let answer = ''
            let numSplit = n.toString().split('')
            let numbersArray = []

            for(let i = 0; i < numSplit.length; i++){
                let numStringtoNumber = parseInt(numSplit[i])
                numbersArray.push(numStringtoNumber)
            }
        
            let originalNumberSorted = numbersArray.sort()
            let maxNumberPossible = parseInt(originalNumberSorted.reverse().join(''))
        
            if(maxNumberPossible === n){
                answer = -1
            } 
            
            let newNumber = 0
            for(let i = n+1; i <= maxNumberPossible; i++){
                newNumber = i
                let newNumberArrayString = newNumber.toString().split('')
                let newNumbersArrayNumbers = []

                newNumberArrayString.forEach(number => newNumbersArrayNumbers.push(parseInt(number)) )
                
                let newNumberSortedArray = newNumbersArrayNumbers.sort().reverse()
                let string1 = originalNumberSorted.join('')
                let string2 = newNumberSortedArray.join('')
                
                if(string1 === string2){
                    answer = newNumber
                } 
            }    

            results += ` 
                        ${answer} `
        })
        this.setState({testResults : results})
    }
    

    render(){
        return (
            <div className="challenge-container">

                <div className='challenge-title-contatiner'>
                    <h2 className='challenge-main-title'> Challenge 7 - Next larger number with the same digits </h2>
                </div>

                <div className='challenge-instructions-container'>
                    <h3 className='challenge-instructions-title'> Instructions: </h3>
                    <p className='challenge-instructions-text'>
                        Write a function that takes a positive integer number and returns the next bigger number formed by the same digits
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

export default Challenge07



//Next bigger number with the same digits

// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1


function nextBigger(n){
    let numSplit = n.toString().split('')
    let numbersArray = []
    for(let i = 0; i < numSplit.length; i++){
        let numStringtoNumber = parseInt(numSplit[i])
        numbersArray.push(numStringtoNumber)
    }

    let originalNumberSorted = numbersArray.sort()
    let maxNumberPossible = parseInt(originalNumberSorted.reverse().join(''))

    if(maxNumberPossible === n){
        return -1
    } 
    
    let newNumber = 0
    for(let i = n+1; i <= maxNumberPossible; i++){
        newNumber = i
        let newNumberArrayString = newNumber.toString().split('')

        let newNumbersArrayNumbers = []
        newNumberArrayString.forEach(number => newNumbersArrayNumbers.push(parseInt(number)) )

        let newNumberSortedArray = newNumbersArrayNumbers.sort().reverse()

        let string1 = originalNumberSorted.join('')
        let string2 = newNumberSortedArray.join('')

        if(string1 === string2){
            return newNumber
        } 
    }    
}

// console.log(nextBigger(12))
// console.log(nextBigger(513))
// console.log(nextBigger(2017))
// console.log(nextBigger(9))
// console.log(nextBigger(111))
// console.log(nextBigger(531))