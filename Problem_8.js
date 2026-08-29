// **Bài 8.** Viết hàm kiểm tra một số có phải là số chính phương (perfect square) không, 
// không dùng `Math.sqrt`.
class SolvingProblem{
    perfectSquare(n){
        for(let i = 0; i<= n; i++){
            if(i * i == n){
                return "Là số chính phương";
            }
        }
        return "Số này không là số chính phương";
    }
}
const problem = new SolvingProblem();
console.log(problem.perfectSquare(-16))