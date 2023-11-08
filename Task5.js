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
