
var bills = [124, 48, 268];
console.log("bills = ",bills);
// Function nhan vao mot hoa don => Tra ve tien tip tinh toan tren hoa don do
// debugger;
function calTip(bill) {
    var percent;
    if(bill < 50) {
        percent = 0.2; //20%
    } else if (bill <= 200) {
        percent = 0.15; // 15%
    } else {
        percent = 0.1; // 10%
    }
    return percent * bill;
}
var tips = [
    calTip( bills[0] ),
    calTip( bills[1] ),
    calTip( bills[2] ),
]
console.log("tips = ",tips);

var tips2 = [];
tips2.push( calTip(bills[0]) );
tips2.push( calTip(bills[1]) );
tips2.push( calTip(bills[2]) );
console.log("tips2 = ", tips2);

var tips3 = []; //length = 0
tips3[tips3.length] = calTip(bills[0]); //length = 1 -> index hợp lệ: 0
tips3[tips3.length] = calTip(bills[1]); //length = 2 -> index hop le: 0, 1
tips3[tips3.length] = calTip(bills[2]); //length = 3 -> 0,1,2
console.log("tips3 = ", tips3);


var finalValues = [
    tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2]
];
console.log("finalValues = ", finalValues);