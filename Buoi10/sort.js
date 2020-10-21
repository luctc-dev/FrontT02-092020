var arrayListTasks = [
  {
    _id: 12321,
    name: 'E',
  },
  {
    _id: 12414,
    name: 'B',
  },
  { 
    _id: 1424,
    name: 'D'
  }
]

var arrayNumber = [1278,4238,1,43,775,-10,23429, 0];

function compareNumber(numberA, numberB) {
  if (numberA < numberB) {
    return 11327892;
  }
  if (numberA > numberB) {
    return -4237482742;
  }
  return 0;
}

// Sắp xếp theo id giảm dần, id tăng dần
function compareTasks(taskA, taskB) {
  if (taskA.name < taskB.name) {
    return -1;
  }
  if (taskA.name > taskB.name) {
    return 1;
  }
  return 0;
}

arrayNumber.sort(compareNumber)
arrayListTasks.sort(compareTasks);
// arr.sort();
// arr.sort(functionCallBack);