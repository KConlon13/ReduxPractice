// JS PRACTICE QUESTIONS

// 1. Write a program that prints the numbers from 1 to 21. But for multiples of three,
// print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For 
// numbers which are multiples of both three and five, print "FizzBuzz".

// for (let i = 1; i < 22; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0){
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

// 2. Write a program that reverses a string

// let word = "Kyle Conlon";

// let newWord = word.split("").reverse().join("")

// console.log("ORIGINAL WORD:", word, "/ REVERSED WORD:", newWord)

// 3. Write a program that checks if a word is a palindrome

// let someWord = "raCe caR"
// let otherWord = "kyle"

// function palindromeChecker(word){
//     let nonRevWord = word.toLowerCase().replace(/\s/g, "")
//     let revWord = nonRevWord.split("").reverse().join("")

//     if (nonRevWord === revWord) {
//         console.log("This word is a palindrome. Great job!")
//     } else {
//         console.log("This word is not a palindrome. Sorry!")
//     }
// }

// palindromeChecker(someWord)

// 4. For this challenge, you will be determining the largest word in a string

// let sentence = "The quick brown fox jumped over the lazy dog"
// let otherSentence = "Harry Potter and the Prisoner of Azkaban"

// function longestWordFinder(sentence){
//     let sentenceArray = sentence.split(" ").sort(function(a,b) {return b.length - a.length})
//     console.log("The longest word is: ", sentenceArray[0])    
// }

// longestWordFinder(otherSentence)

// 5. Alphabet Soup! You'll be sorting words in a string alphabetically

// let sentence = "You know nothing Jon Snow"

// function alphabetizer(sentence){
//     let sortedSentence = sentence.toLowerCase().split(" ").sort()
//     console.log(sortedSentence)
// }

// alphabetizer(sentence)

