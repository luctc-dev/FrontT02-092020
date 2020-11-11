var firstName = "John";
var age = 10;
console.log("age = ", 16);
console.log("age >= 20", age >= 20);
console.log("age < 30", age < 30);
console.log("!(age < 30)", !(age < 30));

console.log("age >= 20 && age < 30", age >= 20 && age < 30)
console.log("age >= 20 || age < 30", age >= 20 || age < 30);

if(age < 13) {
    console.log(firstName + ' la mot cau hoc sinh');
} else if (age >= 13 && age <= 18) {
    console.log(firstName + ' la mot cau be tuoi teen');
} else if (age > 18 && age < 30) {
    console.log(firstName + ' la mot nguoi dan ong trung nien');
} else {
    console.log(firstName + ' la mot nguoi dan ong truong thanh');
}

var job = 'worker';
console.log("============== switch(job) =============");
switch (job) {
    case 'designer':
        console.log(firstName + ' la mot designer');
        break;
    case 'worker':
        console.log(firstName + ' la mot worker');
        break;
    case 'teacher':
        console.log(firstName + ' la mot teacher');
        break;
    default:
        console.log(firstName + ' la mot nguoi co cong viec nao do??');
        break;
}


console.log("============== switch(age) =============")
switch(true) {
    case age < 13:
        console.log(firstName + ' la mot cau hoc sinh');
        break;
    case age >= 13 && age <= 18:
        console.log(firstName + ' la mot cau be tuoi teen');
        break;
    case age > 18 && age < 30:
        console.log(firstName + ' la mot nguoi dan ong trung nien');
        break;
    default:
        console.log(firstName + ' la mot nguoi dan ong truong thanh');
        break;
}



//  Falsy
// null, undefined, NaN, 0, '', false

var height = 0;

if(height || height === 0) {
    console.log("height co gia tri", height);
} else {
    console.log("height khong co gia tri", height);
}

var height2 = '23'; //string

/*
"===" -> Vừa so sánh kiểu dữ liệu, vừa so sánh giá trị. 
"==" -> Chỉ so sánh giá trị.
*/
if(height2 === 23) {
    console.log("Chay vao day");
} else {
    console.log("Chay vao ben duoi else");
}