// **Bài 5.** Viết hàm tính giai thừa của n (n!) bằng vòng lặp.
class solvingProblem{
    factorial(n){
        let factorial = 1
        for (let i = 1; i< n+1; i++){
            factorial = factorial * i;
        }
        return factorial;
    }
}

const gay = new solvingProblem();
console.log(gay.factorial(5))