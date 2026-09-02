// **Bài 13.** Viết hàm đếm số lần xuất hiện của mỗi ký tự trong chuỗi, trả về object.
class solvingProblem{
    mostAppear(string){
        let array = [];
        for (let i = 0; i< string.length; i++){
            array.push(string[i])
        }
        let set_array = new Set(array);
        let new_array = [...set_array];
        const character = {};
        for (let i = 0; i< new_array.length; i++){
            let count = 0;
            for (let j = 0; j < array.length; j++){
                if(new_array[i] == array[j]){
                   count += 1;
                }
            }
            character[new_array[i]] = count;
            
        }
        return character;
    }
}


const string = "dunggggg";
const mostAppearCharacter = new solvingProblem();
console.log(mostAppearCharacter.mostAppear(string))