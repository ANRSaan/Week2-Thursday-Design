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
  


  function Palindrom(str){
    for (i = 0, j = str.length -1; i < str.length /2; i++, j--){
        if (str[i] !== str[j]) {
            return false
        }
    }
    return true
  }

  console.log(Palindrom("a"))
  console.log(Palindrom("hello"))
  console.log(Palindrom("Racecar"))
  console.log(Palindrom("racecar"))