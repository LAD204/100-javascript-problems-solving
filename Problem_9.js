// **Bài 9.** Viết hàm chuyển đổi nhiệt độ giữa Celsius và Fahrenheit, 
// cho phép người dùng chọn chiều chuyển đổi.
"use strict";
const ps = require("prompt-sync");
const prompt = ps();
console.log("Welcome to tempurature unit converter");
const tempurature = prompt("Enter the tempurature ");
const tempuratureUnit = prompt("Please enter the tempurature unit you want to convert: ");
if(tempuratureUnit == 'C'){
    const result = (tempurature - 32) * 5/9;
    console.log("Your tempurature after converting: ", result, " C");
}
else if(tempuratureUnit == 'F'){
    const result = tempurature * 9/5 + 32;
    console.log("Your tempurature after converting: ", result, " F");
}
else{
    console.log("Wrong syntax")
}
