// **Bài 4.** Viết hàm kiểm tra một số có phải số nguyên tố không.
class solvingProblem{
    isPrime(n) {
        if(n<2){
            return `${n} không là số nguyên tố`;
        }  
        else{
            for(let i = 2; i< Math.sqrt(n); i++){
                if(n%i==0){
                    return`${n} là số nguyên tố`;
                }else{
                    return `${n} không là số nguyên tố`;
                }
            }
        }
    }
}

const isprime = new solvingProblem();
console.log(isprime.isPrime(3))