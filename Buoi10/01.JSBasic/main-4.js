var arrStudents = [
    'Nguyen Van A',
    'Nguyen Van B',
    'Nguyen Van C'
];
console.log("arrStudents = ", arrStudents);
console.log("arrStudents length = ", arrStudents.length);
console.log("arrStudents[0] = ", arrStudents[0]);
console.log('arrStudents[length - 1] = ', arrStudents[arrStudents.length - 1]);

var arrStudents2 = new Array('NV A', 'NV B', 'NV C');
console.log("arrStudents2 = ", arrStudents2);
console.log("arrStudents2[2] = ", arrStudents2[2]);


// C, C++, java -> Array chỉ lưu trữ được một kiểu dữ liệu
// Trong Javascript bản chất của Array là một Object
console.log(typeof arrStudents);

var arrDemo = [
    'Nguyen Van A',
    28,
    true,
    [ 123, 456, 789 ]
]
console.log("arrDemo = ", arrDemo);
console.log("arrDemo = ", arrDemo[3][2]);
console.log("arrDemo[2] = ", arrDemo[2]);