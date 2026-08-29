// **Bài 6.** Viết hàm tìm ước chung lớn nhất (GCD) và bội chung nhỏ nhất (LCM) của hai số.
class solvingProblem{
   GCD(a, b){  
        let stop = 0;
        for (let i = 1; i <= (a + b); i++){
            if(a % i == 0 && b % i == 0){
                stop = i;
            }
        }
        return stop;
    }

    LCM(a, b){
        const result = a * b / this.GCD(a,b);
        return result;
    }
}

const gcd = new solvingProblem();
console.log(gcd.GCD(0, 5))