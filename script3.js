//Return all the prime numbers in an array
const array = [-5, -3, -2, -1, ...Array(20).keys()]; 
function isPrime(num) {
    for (let start = 2; num > start; start++) {
      if (num % start === 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(array.filter(isPrime));


  //arrow function
  const newArray = [1, 3, 2, 5, 10];
const isPrimeNum = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};


const myPrimeArray = newArray.filter(element => isPrimeNum(element));
console.log(myPrimeArray);
