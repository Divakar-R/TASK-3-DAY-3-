PROGRAMS USING ANONYMOUS FUNCTION:

//1.Print odd numbers in an array

   const numbers =[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(function(oddnumber){
    if(oddnumber%2!==0){
        console.log(oddnumber);     
    }
});

//2.Convert all the strings to title caps in a string array








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
//6.Return median of two sorted arrays of the same size.
//7.Remove duplicates from an array
//8.Rotate an array by k times
