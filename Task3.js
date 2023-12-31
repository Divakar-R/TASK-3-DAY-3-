PROGRAMS USING ANONYMOUS FUNCTION:

//1.Print odd numbers in an array

   const numbers =[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function(oddnumber){
    if(oddnumber%2!==0){
        console.log(oddnumber);     
    }
});



//2.Convert all the strings to title caps in a string array

const stringArray = ["maTHs is fuN", "diScoVerEd bY me", "baCk tO bACk sixeS"];
const titleCapsArray = stringArray.map(function (str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
});
console.log(titleCapsArray);



//3.Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach(function(item) {
  sum += item;
});

console.log(sum);



//4.Return all the prime numbers in an array


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = numbers.filter(function(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  
   for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }
    return true;
});
console.log(primeNumbers);


//5.Return all the palindromes in an array

const inputArray = ["Rotor","Madam","divakar","civic"];
const palindromes = inputArray.filter(item =>{
    const str = item.toLowerCase().replace(/[^a-z0-9]/g);
    return str==str.split('').reverse().join('');
});
console.log(palindromes);

//6.Return median of two sorted arrays of the same size.

const a = [2,3,5,4];
const b = [3,5,1,2];
const findmedian = (a,b) => {
    const mergearray = [...a, ...b].sort((a,b) => a-b);
    const midvalue =Math.floor (mergearray.length /2);
    if(mergearray.length % 2==0) {
        return (mergearray[midvalue-1]+ mergearray[midvalue]) / 2;
    } else {
        return mergearray[midvalue];
    }
};
const median = findmedian(a,b);
console.log(median);


//7.Remove duplicates from an array

const array = [1, 1, 2, 3, 4, 4, 5, 6, 6];
function unique(inputArray) {
  let dup = [...new Set(inputArray)];
  console.log(dup);
}
unique(array);



//8.Rotate an array by k times

const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = (function (arr, rotations) {
  const len = arr.length;
  const rotated = [];
  
  for (let i = 0; i < len; i++) {
    const newIndex = (i + rotations) % len;
    rotated[newIndex] = arr[i];
  }
  return rotated;
})(array, k);

console.log(rotatedArray);

