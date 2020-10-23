
// debugger;
// for (var run = 1; run <= 10; run = run + 1) {
//     console.log("Run = ", run);
// }
var run = 1;
for ( ; run <= 10; ) {
    console.log("Run = ", run);

    run = run + 1;
}
console.log("Run sau chay xong vong lap = ", run);


var john = [
    'john', 
    'smith', 
    28, 
    true
];
console.log(john);

for(run = 0; run < john.length; run++) {
    console.log("Phan tu thu " + (run + 1) + " = ", john[run]);
}

function calAverage() {
    this.average = (this.maths + this.physics) / 2;
    return this.average;
}

var arrStudents = [
    {
        fullName: 'Nguyen Van A',
        maths: 9,
        physics: 5
    }, {
        fullName: 'Nguyen Van B',
        maths: 8,
        physics: 8
    }, {
        fullName: 'Nguyen Van C',
        maths: 7.6,
        physics: 5.2
    }, {
        fullName: 'Nguyen Van D',
        maths: 8.5,
        physics: 7.6
    }
]
// console.log(arrStudents[0]);
// console.log(arrStudents[1]);
// console.log(arrStudents[2]);
// console.log(arrStudents[3]);

for(var index = 0; index < arrStudents.length; index++) {
    arrStudents[index].calAverage = calAverage;
    arrStudents[index].calAverage();
    // console.log(arrStudents[index]);
}
console.log("arrStudents = ", arrStudents);


// For/in

// Mỗi học sinh có số lượng điểm khác nhau.
// Object scores lưu điểm không phải là một mảng -> Không có thuộc tính length
console.log("===============================");
var calAverage2 = function() {
    var total = 0;
    var totalScores = 0;
    for(key in this.scores) {
        // total = total + 1;
        total += 1;
        totalScores += this.scores[key];
        // console.log("scores " + key + " = ", this.scores[ key ]);
        // console.log("key = ", key);
    }
    return totalScores / total;
    // console.log("total = ", total);
    // console.log("totalScores = ", totalScores);
}
var studentA = {
    fullName: 'Nguyen Van A',
    year: 1992,
    scores: {
        maths: 9,
        physics: 7.5,
        chemistry: 5.4
    },
    calAverage: calAverage2
}
// debugger;

var studentB = {
    fullName: 'Nguyen Van A',
    year: 1992,
    scores: {
        maths: 9,
        physics: 7.5,
        chemistry: 5.4,
        englisht: 6.5
    },
    calAverage: calAverage2
}

console.log("TB StudentA = ", studentA.calAverage());
console.log("TB StudentB = ", studentB.calAverage());



var index = 1;
while(index <= -1) {
    console.log("While index = ", index);
    index++;
}



var index = 1;
do {
    console.log("Do/While index = ", index);
} while(index <= -1);