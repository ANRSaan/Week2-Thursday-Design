/*
Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

For example:

isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false
Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true
*/

// function isPalindrom(str) {
//     let backwards = []
  
//     for (let i = str.length - 1; i >= 0; i--) {
//       backwards.push(str[i])
//     }

//     return str === backwards.join('')
//   }
  
  console.log(otherPalindrom("a"))
  console.log(otherPalindrom("hello"))
  console.log(otherPalindrom("Racecar"))
  console.log(otherPalindrom("racecar"))

  function otherPalindrom(str){
    let j = str.length -1;
    for (let i = 0; i <str.length /2; i++){
        if (str[i] !== str[j]) {
            return false
        }
        j--
    }
    return true
  }