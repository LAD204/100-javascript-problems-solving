// Bài 2.** Viết hàm `fizzBuzz(n)` in ra các số từ 1 đến n; số chia hết cho 3 in "Fizz", 
// chia hết cho 5 in "Buzz", chia hết cho cả hai in "FizzBuzz".
const array = [];
function fizzBuzz(n){
    for(let i = 1; i< n+1; i++){
        if(i % 3 === 0 && i % 5 === 0){
            array.push("FizzBuzz");
        }
        else if (i % 3 === 0){
            array.push("Fizz");
        }
        else if (i % 5 === 0){
            array.push("Buzz");
        }
        else{
            array.push(i);
        }
    }
    return array;
}

const n = 34;
console.log(fizzBuzz(n));