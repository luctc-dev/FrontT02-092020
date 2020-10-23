var arrayUsers = [
  {
    id: 42134,
    firstName: 'Trần',
    lastName: 'Tèo'
  },
  {
    id: 324,
    firstName: 'Nguyễn',
    lastName: 'Tý'
  },
  {
    id: 423424,
    firstName: 'Văn',
    lastName: 'Huế'
  }
]

var newArray = arrayUsers.map((user) => {
  return {
    id: user.id * 1000,
    fullName: user.firstName + ' ' + user.lastName
  }
})

console.log(arrayUsers)
console.log(newArray)