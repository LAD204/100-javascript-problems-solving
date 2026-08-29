// **Bài 7.** Viết hàm đảo ngược một số nguyên (VD: 1234 → 4321). Chú ý số âm.
class solvingProblem{
    reverse(n){
        let stop = true;
        let array = [];
        let donvi = 10;
        let new_array = "";
        let result = "";
        while (stop){
            let m = n % donvi; 
            let tamp = String(m);
            array.push(tamp); 
            n = (n - m)/donvi; 
            if (n / donvi < 1){
                let hmm = String(n);
                array.push(hmm);
                stop = false;
            }
        }
        for(let i = 0; i < array.length; i++){        
            new_array += parseInt(array[i]) ;
        }
        return parseInt(new_array);
    }
}
const gay = new solvingProblem();
console.log(gay.reverse(1234))