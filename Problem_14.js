    // **Bài 14.** Viết hàm kiểm tra hai chuỗi có phải là anagram của nhau không (chứa cùng các ký tự, khác thứ tự).
    class solvingProblem{
        isAnagram(string1, string2){
            if(string1.length === string2.length){
                let alphabet = "abcdefghijklmnopqrstuvwxyz";
                let counting_array1 = {};
                for(const char of alphabet){
                    counting_array1[char] = 0
                }
                for(const char of string1){
                    counting_array1[char]++
                }
                let result1 = [];
                for(const char of alphabet){
                    while(counting_array1[char]>0){
                        result1.push(char)
                        counting_array1[char]--
                    }
                }


                let counting_array2 = {};
                for(const char of alphabet){
                    counting_array2[char] = 0
                }
                for(const char of string2){
                    counting_array2[char]++
                }

                let result2 = [];
                for(const char of alphabet){
                    while(counting_array2[char]>0){
                        result2.push(char)
                        counting_array2[char]--
                    }
                }
                let final_result1 = "";
                let final_result2 = "";
                for(const char of result1){
                    final_result1 += char
                } 
                for(const char of result2){
                    final_result2 += char
                } 
                if(final_result1 === final_result2){
                    return true
                }
                return false;

            } 
            else if(string1 == "" || string2 == ""){
                return false;
            }
            else{
            return false;
            }
        }
    }

    const string1 = "dung"
    const string2 = "gudn"
    const problem_solve = new solvingProblem();
    console.log(problem_solve.isAnagram(string1, string2))