//Return all the palindromes in an array

var myArray = ['121', 'racecar', '333', 'ada'];

function palindromize(word) {
    var p = word.split("").reverse().join("");
    return p === word ? word : 0;
}

console.log( JSON.stringify(myArray.map(palindromize), 0, 4) );


//using arrow function
function isPalindrome(word) {
    palindromeWord = ''
    for(var i = word.length - 1; i >= 0; i--) {
      palindromeWord += word.charAt(i)
    }
  
    return palindromeWord === word
  }
  let arrList =  ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip']
  
  let palindromeArr = []
  
  arrList.forEach(word => {
    if (isPalindrome(word)) {
      palindromeArr.push(word)
    }
  })
  
  console.log(palindromeArr)
  
