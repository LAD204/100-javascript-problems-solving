// **Bài 3.** Viết hàm tính tổng các chữ số của một số nguyên dương (VD: 1234 → 1+2+3+4 = 10).
function tinhTong(n){
    let result = 0
    let stop = true
    let donvi = 10;
    while (stop){
        let m = n % donvi;
        result = result + m;
        n = (n - m)/donvi; 
        if(n % donvi < 1){
            result = result + (n/donvi);
            stop = false;
        }
    }
    return result;
}

console.log(tinhTong(100))