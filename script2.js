// Sum of all numbers in an array
const sum = [1, 2, 3].reduce(add,0); 

function add(accumulator, a) {
    return accumulator + a;
}

console.log(sum);

// sum of all numbers in arrow 

function arraySum(array){
    var total = 0,
        len = array.length;
  
    for (var i = 0; i < len; i++){
      total += array[i];
    }
  
    return total;
  }
  
  var my_array = [1,2,3,4];
  
  
  console.log( arraySum( my_array ) );
  
  
