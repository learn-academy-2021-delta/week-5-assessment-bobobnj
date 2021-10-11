// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

//describe to call the clarify funtion to be tested
 describe('ltrHntrArr', () => {
    // it - to describe the functions expected ability
    it('takes in an array and returns all words containing a single letter'), ()=>{
      //within the function these example elements
      var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
      var letterA = "a"// Expected output: ["Apple", "Banana", "Orange"]
      var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
      var letterE = "e"// Expected output: ["Cherry", "Blueberry", "Peach"]
      // are expected to to return the identified expected output
      expect(ltrHntrArr(arrayOfWords1).toEqual(["Apple", "Banana", "Orange"])),
      expect(ltrHntrArr(arrayOfWords2).toEqual(["Cherry", "Blueberry", "Peach"]))
  })
  })

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"



// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

//describe to call the clarify funtion to be tested
describe('ltrHntrArr', () => {
    // it - to describe the functions expected ability
    it('takes in an array and returns all words containing a single letter'), ()=>{
      //within the function these example elements
      var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
      var letterA = "a"// Expected output: ["Apple", "Banana", "Orange"]
      var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
      var letterE = "e"// Expected output: ["Cherry", "Blueberry", "Peach"]
      // are expected to to return the identified expected output
      expect(ltrHntrArr(arrayOfWords1).toEqual(["Apple", "Banana", "Orange"])),
      expect(ltrHntrArr(arrayOfWords2).toEqual(["Cherry", "Blueberry", "Peach"]))
  })
  })


var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]



// b) Create the function that makes the test pass.

// b) Create the function that makes the test pass.
// Declare function
const ltrHntrArr = (arr) => {
    let newArr = [] // assign an empty array to store new array
    // here is where I'm stuck
    // I thought about doin.match and then using .push if they matched
     // in my return I should be able to see newArr.push = finctions intent
    // 
 
  // }
  // Then I log my ltrHntrArr(arrayOfWords1)
 // This one crushed me. I watched videos on all sorts of ways to get through this stuff but I can't put it together. This assessment was supposed to be the one I nailed!
 

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('fullOrNot', () => {
    // it - to describe the functions expected ability
    it('takes in an array of 5 nums and returns whether it is a full house or not'), ()=>{
      //within the function these example elements
      var hand1 = [5, 5, 5, 3, 3] // Expected output: true
      var hand2 = [5, 5, 3, 3, 4] // Expected output: false
      var hand3 = [5, 5, 5, 5, 4] // Expected output: false
      // are expected to to return the identified expected output
      expect(fullOrNot(hand1).toEqual([true)),
      expect(fullOrNot(hand2).toEqual(false))
      expect(fullOrNot(hand3).toEqual(false),
  
  })
  })

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass.
// create function
const fullHouseOrNot = (arr) => {
    let countObj = {}
    // for(let x of arr){ loop through 
      countObj[x] = (countObj[x] || 0) + 1;
    }
    // I feel like i need a forEach type loop in this code
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }
// These challenges are way outside of my understanding. I wish I new what was my ultimate hang up. Everything right now I guess.
