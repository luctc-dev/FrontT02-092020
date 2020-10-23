function calBMI() {
    // console.log("this calBMI = ", this);
    this.bmiValue = this.mass / (this.height * this.height);
    // return this.bmiValue;
}
// var calBMI2 = function() {
//     console.log("this calBMI2 = ", this);
//     return this.mass / (this.height * this.height);
// }

console.log("typeof calBMI = ", typeof calBMI);
// console.log("typeof calBMI2 = ", typeof calBMI2);

var john = {
    fullName: "John Smith",
    mass: 69,
    height: 1.7,
    BMI: calBMI
    // calBMI: function() {
    //     // To Do : ...
    //     return this.mass / (this.height * this.height);
    // }
}

var mark = {
    fullName: "Mark Smith",
    mass: 59,
    height: 1.65,
    //BMI: calBMI() -> Lợi gọi hàm
    BMI: calBMI
    // calBMI: function() {
    //     // To Do : ...
    //     return this.mass / (this.height * this.height);
    // }
}
// debugger;
// console.log("BMI John = ", john.BMI());
// console.log("BMI Mark = ", mark.BMI());
john.BMI();
mark.BMI();

// if(john.BMI() > mark.BMI()) {
//     console.log("BMI của John lớn hớn BMI của Mark");
// } else if (john.BMI() < mark.BMI()) {
//     console.log("BMI của Mark lớn hơn BMI của John");
// } else {
//     console.log("BMI của John và Mark bằng nhau");
// }

// Nếu truy xuất vào một phần tử (thuộc tính) không hợp lệ?
console.log("BMI John = ", john.bmiValue);
console.log("BMI Mark = ", mark.bmiValue);

if(john.bmiValue > mark.bmiValue) {
    console.log("BMI của John lớn hớn BMI của Mark");
} else if (john.bmiValue < mark.bmiValue) {
    console.log("BMI của Mark lớn hơn BMI của John");
} else {
    console.log("BMI của John và Mark bằng nhau");
}