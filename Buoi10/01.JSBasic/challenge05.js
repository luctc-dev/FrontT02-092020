/*
<=> 0       <= random <= 1
<=> 0 * 250 <= random * 250 <= 1 * 250
<=> 0       <=   X   <= 250
0 -> 250


BTVN => random (min, max)
    (100 -> 1000)
    (200 -> 300)

Có 3 dạng làm tròn trong Javascript (Math)
    - Luôn luôn làm tròn xuống -> Math.floor()
    - Luôn luôn làm tròn lên -> Math.ceil()
    - Làm tròn theo quy tắc lấy mốc 0.5 làm chuẩn Math.round()
        >= 0.5 => Làm tròn lên
        < 0.5 => Làm tròn xuống
*/


function randomArray(n, max) {
    // debugger;
    var arr = [];
    for(var index = 1; index <= n; index++) {
        var num = Math.random() * max; // Số lẻ
            num = Math.ceil(num);
        arr.push(num);
    }
    return arr;
}


// var bills = randomArray(3, 500);
// console.log("bills = ", bills);

var john = {
    firstName: 'John',
    lastName: 'Smith',
    bills: randomArray(100, 500),
    calTips: function() {
        // Nếu số lượng hoá đơn là 10 => Chạy 10 làn để tính 10 tip
        // Nếu số lượng hoá đơn là 5 => Chạy 5 lần để tính 5 tiền tip
        // -> Số lượng hoá đơn lấy từ bills.length
        this.tips = [];
        this.totalValues = [];
        var length = this.bills.length;
        console.log("length = ", length);
        // debugger
        // for(var index = 0; index <= length - 1; index++) {
        for(var index = 0; index < length; index++) {
            // 0 -> < 10 -> 0,1,...9
            var percent;
            var bill = this.bills[index];
            if(bill < 50) {
                percent = 0.2; //20%
            } else if (bill <= 200) {
                percent = 0.15; // 15%
            } else {
                percent = 0.1; // 10%
            }
            this.tips[index] = bill * percent;
            // this.totalValues[index] = this.tips[index] + bill;
            this.totalValues[index] = this.tips[index] + this.bills[index];
        }
    }
}

john.calTips();
console.log("john = ", john);
