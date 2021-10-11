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

// function - cryptexMessage
// parameter - string
// split string to array of individual characters(can't map a string)
// iteration .map
// conditional - replace particular values in both casings
// .join back to a string


// a) Create a test with expect statements using the variables provided.


// a) Create a test with expect statements using the variables provided.
// create describe to clarify function
describe('cryptexMessage', () => {
    // it - to describe the function expected ability
    it('takes in a string and returns coded message'), ()=>{
      //within the function these example elements
      var secretCodeWord1 = "Lackadaisical" // Expected output: "L4ck4d41s1c4l"
      var secretCodeWord2 = "Gobbledygook"  // Expected output: "G0bbl3dyg00k"
      var secretCodeWord3 = "Eccentric"     // Expected output: "3cc3ntr1c"
      // are expected to to return the identified expected output
      expect(cryptexMessage(secretCodeWord1).toEqual("L4ck4d41s1c4l")
      expect(cryptexMessage(secretCodeWord2).toEqual("G0bbl3dyg00k")
      expect(cryptexMessage(secretCodeWord3).toEqual("3cc3ntr1c")
  })
  

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"



// b) Create the function that makes the test pass.

// const codedMessage = => {
//     let coded = string.split("").map(value => {
//     string.split("").map(value => {
//         if(value === "a") { //use conditionals to with maps to find the elements to be changed
//             return 4
//          } if(value === 'e'){
//             return 3
//          } if(value === '0') {     //Sarah added a .toUppercase method to suffice cap errors
//              return 0              //I used something like this value === ‘e’ || value === ‘E’) but see how .toUppercase can be more dynamic
//          } if(value === 'i')
//              return 1
//             else {
            //    return value
// }
//          }
    // }).join("")  //This was basically how I did it on my orioginal push but a little cleaner. It doesn't account capitalization
    // though. 
// }

let cryptexMessage = (str) => {
    let coded = str.replaceAll(/a/gi, 4).replaceAll(/3/gi, e).replaceAll(/o/gi, 0).replaceAll(/i/gi, 1)  
    //this is what I was talking about in slack. I tried this method over and over but wasn't chaning them together correctly
}   // It's cleaner but my ignorance to exactly what was going on kept me from properly chaining parameters. This is probably where
    // mentors and pair-programming come in


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.
// 
// function - ltrHntrArr
// parameters - array, string
// iteration - filter
// .includes consider casing


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
      expect(ltrHntrArr(arrayOfWords1, letterA).toEqual(["Apple", "Banana", "Orange"])),
      expect(ltrHntrArr(arrayOfWords2, letterE).toEqual(["Cherry", "Blueberry", "Peach"]))
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
const ltrHntrArr = (arr, string) => { // so when I was doin this I never placed the string value on
    // let newArr = [] // originaly I planned to add this but Sarah showed us different
    // here is where I'm stuck
    return arr.filter(value => {
        return value.toLowerCase().includes(string)
    })

// value.match(/str/i) is another weay to draw a similiar output but didn't work well with this request

    // I thought about doin.match and then using .push if they matched
     // in my return I should be able to see newArr.push = finctions intent
    // 
 
  // }
  // Then I log my ltrHntrArr(arrayOfWords1)
 // This one crushed me. I watched videos on all sorts of ways to get through this stuff but I can't put it together. This assessment was supposed to be the one I nailed!
 

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
// function - fullOrNot
// acnchor variable - first item in array
// parameter - array
// iterate - to see how many it appears
// second item - check remaining elements against anchor and if not save as variable
// iterate - check how many times the second item appears
// has to be 2 to 3 or 3 to 2 in order to be fullhouse 
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
    let cardOne = arr[0]
    let cardOneCounter = 0
    let cardTwo = null
    let cardTwoCounter = 0
    array.forEach(vslur => {
        if(value === cardOne) {
            cardOneCounter =+ 1
        }else {
            cardTwo = value
        }
    }) 
    array.forEach(value => {
        if(value === cardTwo){
            cardTwoCounter += 1
        }

    }) // I see what Sarah was doing here. We ran out of time so there was no way to ask about the diference in methods
        // if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
//       return true ; 
//     }
//     return false;
        // I was using a code example that used verbage outside of anything we use so I may have had a syntax problem from the conversion

// These challenges are way outside of my understanding. I wish I new what was my ultimate hang up. Everything right now I guess.
// The review today was helpful but Qs #2 and #3 still aren't fully understood here. I'm going to review it all this evening and stay on Java all week. 
