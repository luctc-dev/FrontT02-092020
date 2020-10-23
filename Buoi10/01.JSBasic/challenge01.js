var massMark = 59;
var massJohn = 59;

var heightMark = 1.65;
var heightJohn = 1.65;

var bmiJohn = massJohn / (heightJohn * heightJohn);
// var bmiJohn = massJohn / (heightJohn ** 2);
var bmiMark = massMark / (heightMark * heightMark);
console.log("bmiJohn = ", bmiJohn);
console.log("bmiMark = ", bmiMark);

var isMarkHigher = bmiMark > bmiJohn;
console.log("BMI cua Mark lớn hơn BMI của John? " + isMarkHigher);