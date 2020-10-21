var arrDemo = [
    'John',
    'Smith',
    28,
    'John',
    false
];

console.log("arrDemo = ", arrDemo);

console.log("push(123, 789) = ", arrDemo.push(123, 789));
console.log("unshift(456, 678) = ", arrDemo.unshift(456, 678));

console.log("arrDemo.pop() = ", arrDemo.pop()) // 789
console.log('arrDemo.shift() = ', arrDemo.shift()) // 456

console.log("arrDemo = ", arrDemo);
console.log("arrDemo.indexOf('John') = ", arrDemo.indexOf('John'));
console.log("arrDemo.indexOf('john') = ", arrDemo.indexOf('john'));

console.log("arrDemo.lastIndexOf('John') = ", arrDemo.lastIndexOf('John'));

console.log("arrDemo.indexOf(28) = ", arrDemo.indexOf(28));
console.log("arrDemo.lastIndexOf(28) = ", arrDemo.lastIndexOf(28));

/**
 * indexOf() -> Tìm vị trí xuất hiện đầu tiên của một phần tử => Kiểm tra xem một phần tử có tồn tại trong array hay không?
 *  + Nếu tồn tại => Trả về index xuất hiện đầu tiên của phần tử đó
 *  + Nếu không tồn tại => Trả về -1
 * 
 * => nếu như indexOf và lastIndexOf trả về cùng một gía trị giống nhau => Giá trị đó là duy nhất trong mảng. 
 */

if( arrDemo.indexOf(true) !== -1 ) {
    console.log("John da ket hon");
} else {
    console.log("John chua ket hon");
}