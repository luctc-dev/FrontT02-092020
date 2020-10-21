// key: value
var student = {
    fullName: 'Nguyen Van A',
    year: 1990,
    scores: {
        maths: 9,
        physics: 7.5,
        chemistry: 5
    },
    calAverage: function() {
        // console.log("Run calAverage");
        // console.log(this);
        var maths = this.scores.maths;
        var physics = this.scores.physics;
        var chemistry = this.scores.chemistry;
        
        return (maths + physics + chemistry) / 3;
    }
};
console.log("student = ", student);
console.log("fullName = ", student.fullName);
console.log("scores = ", student.scores);
console.log("scores maths = ", student.scores.maths);
console.log("scores physics = ", student.scores.physics);
console.log("scores chemistry = ", student.scores.chemistry);

// arrDemo.push()
var average = student.calAverage(); // Method cua object student
console.log("average = ", average);

// this -> Con tro this -> Trỏ tới đối tượng hiện tại.

console.log("==================================");

var student2 = new Object();
console.log("student2 = ", student2);

student2.fullName = 'Nguyen Van B';
student2.year = 1992;
student2.scores = {
    maths: 8,
    physics: 7,
    chemistry: 5
}
student2.calAverage = student.calAverage;
// student2.calAverage = function() {
//     var maths = this.scores.maths;
//     var physics = this.scores.physics;
//     var chemistry = this.scores.chemistry;
    
//     return (maths + physics + chemistry) / 3;
// }

// console.log("student2.fullName = ", student2.fullName);

console.log("student2 = ", student2);
console.log("student2.calAverage() = ", student2.calAverage());
console.log("student2['fullName']", student2['fullName']);


var objDemo = {
    'full-name': 'Nguyen Van C'
}
console.log("objDemo = ", objDemo);
console.log("objDemo.full-name = ", objDemo.full-name);
console.log("objDemo['full-name'] = ", objDemo['full-name']);