//Print odd numbers in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var oddNumbers = numbers.filter(function(item) {
   return (item % 2 === 1);
});

console.log(oddNumbers);


//Do the below programs in arrow functions
// Print odd numbers in an array
function getOddNumbers() {
    var arr = [4,5,7,8,14,45,76];
    
    var evens = arr.filter(number => number % 2 === 1);
    console.log('Odd Numbers: ' + evens);
}

getOddNumbers();
