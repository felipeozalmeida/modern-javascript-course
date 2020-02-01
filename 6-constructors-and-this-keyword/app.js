// Object literals only
// const person = {
//   name: 'Felipe',
//   age: 21,
//   dob: '1998-07-04T08:34:00-03:00'
// }

// console.log(person)
// console.log(person.name)
// console.log(new Date(person.dob))

// Using constructors
function Person(name, dob) {
  this.name = name || 'Stranger'
  this.birthday = dob ? new Date(dob) : new Date()
  this.getAge = function () {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

const felipe = new Person('Felipe', '1998-07-04T08:34-03:00')
const john = new Person('John', '1973-03-13T00:00-03:00')
const stranger = new Person()

console.log(felipe)
console.log(john)
console.log(stranger)
