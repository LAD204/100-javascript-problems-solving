// **Bài 12.** Viết hàm kiểm tra chuỗi có phải palindrome (đối xứng) không, 
// bỏ qua khoảng trắng và không phân biệt hoa/thường.
class solvingProblem{
    isPalindrome(string){
        let array = [];
        for(let i = 0; i< string.length; i++){
            if(string[i]!=" "){
                array.push(string[i]);
            }
        }
        let left = 0;
        let right = array.length-1;
        for (let i = 0; i< (array.length-1)/2; i++){
            if(array[left].toLowerCase()!=array[right].toLowerCase()){
                return false;
            }
            left += 1;
            right -= 1;
        }
        return true;
    }
}
const string = "ab a"
const ispalin = new solvingProblem();
console.log(ispalin.isPalindrome(string))