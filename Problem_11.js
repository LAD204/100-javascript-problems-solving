// **Bài 11.** Viết hàm đảo ngược một chuỗi mà không dùng `reverse()`.
class slovingProblem{
    reverse(string){
        let array = [];
        for (let i = 0; i< string.length; i++){
            array.push(string[i]); 
        }
        let new_array = "";
        for (let i = array.length-1; i >= 0; i--){
            new_array += array[i];

        }
        return new_array;
    }
}

const string = 'hmmmmm';
const reve = new slovingProblem()
console.log(reve.reverse(string))