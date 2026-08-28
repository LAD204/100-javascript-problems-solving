// Bài 1.** Viết hàm `isEven(n)` kiểm tra một số nguyên có phải số chẵn không.
function isEven(integer){
    if(integer%2==0){
        console.log(`Số ${integer} là số nguyên`);
    }
    else{
        console.log(`${integer} không là số nguyên`);
    }
}

const integer = 3;
console.log(isEven(integer))