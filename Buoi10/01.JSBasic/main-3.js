// Hàm là một đoạn chương trình độc lập, thực hiện một khối chức năng nhất định nào đó , sau khi thực hiện xong => Trả về một giá trị cho chương trình gọi nó. Chia nhỏ code.

var yearJohn = 0;
// debugger;
function tinhTuoi(year) {
    // Hang loat thao tac tinh toan ...
    return 2019 - year;
}
function thayDoiNamSinh() {
    yearJohn = 1990;
}

// thayDoiNamSinh(); //Loi goi ham, Function call
// var age = tinhTuoi(yearJohn);
// console.log("Tuoi John = ", age);

var tinhTuoi2 = function(year) {
    // To Do ...
    return 2019 - year;
}
var thayDoiNamSinh2 = function() {
    yearJohn = 1990;
}

// thayDoiNamSinh2(); //Loi goi ham, Function call
// var age = tinhTuoi2(yearJohn);
// console.log("Tuoi John2 = ", age);

var tinhTuoi3 = (year) => {
    //  To Do ...
    return 2019 - year;
}
var thayDoiNamSinh3 = () => {
    yearJohn = 1991;
}
thayDoiNamSinh3(); //Loi goi ham, Function call
var age = tinhTuoi3(yearJohn);
console.log("Tuoi John3 = ", age);



function printContent(firstName, job) {
    switch (job) {
        case 'teacher':
            console.log(firstName + ' la mot giao vien!');
            break;
        case 'designer':
            console.log(firstName + ' la mot nguoi thiet ke!');
            break;
        default:
            console.log(firstName + ' lam cong viec nao do??');
            break;
    }
}

printContent('John', 'designer');
printContent('John', 'teacher');
printContent('John', 'worker');