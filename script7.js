// Rotate an array by k times
function rotateArray(arr,val,pos){
    arr=arr.concat(arr.splice(0,arr.indexOf(val)+pos));
    return arr;
}
var adjustedArray=rotateArray(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],'may',5);
console.log(adjustedArray)
