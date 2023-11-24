//Convert all the strings to title caps in a string array
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(titleCase("steffi durai nishee"));


  // Convert all the strings to title caps in a string array

function titleCase(str) {
    return str.toLowerCase().toUpperCase();
  }
  
  console.log(titleCase('steffi nishee'));
  
  
