// Viết hàm filter lọc ra những tên thoã mãn yêu cầu
// Truyền vào chữ cái là 'a' -> Phải lọc được những phần tử có name tồn tại 'a' bên trong
// Không phân biệt chữ hoa chữ thường 
// Gợi ý những hàm sẽ dùng liên quan tới string và array (toLowerCase, toUpperCase, indexOf)
var arrayListTasks1 = [
  {
    id: 12321,
    name: 'A',
  },
  {
    id: 12414,
    name: 'B',
  },
  { 
    id: 1424,
    name: 'CCCC'
  }
]
var arrayListTasks2 = [
  {
    id: 123414,
    name: 'A2',
  },
  {
    id: 978,
    name: 'B2',
  },
  { 
    id: 312,
    name: 'CCCC2'
  }
]

function callbackFilterListTasks(taskObj, index, array) {
  if (taskObj.id < 10000) {
    return true;
  }
  return false;
}

// var newArray = arrayListTasks.filter(callbackFilterListTasks)

// console.log("newArray", newArray);

// Nếu không có filter thì ap dụng kĩ thuật lập trình thông thường


// function filter(callback) {
//   var newArray = [];

//   for (var index = 0; index < arrayListTasks.length; index++) {
//     var taskObj = arrayListTasks[index];
//     var isValid = callback(taskObj, index, arrayListTasks);
  
//     if (isValid) {
//       newArray.push(taskObj);
//     }
//   }
  
//   return newArray
// }

Array.prototype.myFilter = function(callback) {
  console.log("this = ", this);
  var newArray = [];
  var currentArray = this; // alias
  for (var index = 0; index < currentArray.length; index++) {
    var element = currentArray[index];
    var isValid = callback(element, index, currentArray);
  
    if (isValid) {
      newArray.push(element);
    }
  }
  
  return newArray;
}

var newArray1 = arrayListTasks1.myFilter(callbackFilterListTasks);
var newArray2 = arrayListTasks2.myFilter(callbackFilterListTasks);

console.log("newArray1", newArray1);
console.log("newArray2", newArray2);

// Hướng đối tượng -> Lấy đối tượng làm trọng tâm 
// Hướng thủ tục -> Lấy thủ tục làm trọng tâm


var returnValue = abc()


def(returnValue);
// ..
// ..

arrayListTasks1.