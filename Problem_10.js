// **Bài 10.** Viết hàm tính điểm trung bình và xếp loại (Giỏi/Khá/TB/Yếu) từ một mảng điểm số, 
// xử lý trường hợp mảng rỗng.
class solvingProblem{
    outstanding(array){
        if(array.length<1){
            return "Mảng rỗng";
        }        let result = 0;
        let i = 0;
        while(i<array.length){
            result += array[i];
            i++;
        }
        result = result/array.length
        if(result >= 8.5){
            return "Giỏi";
        }
        else if( result > 5 && result < 8.5){
            return "Khá";
        }
        else if(result > 4 && result <= 5){
            return "Trung bình";
        }
        else{
            return "Yếu";
        }
    }
}

const phanLoai = new solvingProblem();
const array = [8.5, 8.5];
console.log(phanLoai.outstanding(array));