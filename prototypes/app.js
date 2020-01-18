function Person(args) {
  this.firstName = args && args.firstName ? args.firstName : "Stranger";
  this.lastName = args && args.lastName ? args.lastName : "Stranger";
  this.birthday = args && args.dob ? new Date(args.dob) : new Date();
}

Person.prototype.getAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

const felipe = new Person({ firstName: "Felipe", lastName: "Almeida", dob: "1998-07-04T08:34-03:00" });
const john = new Person({ firstName: "John", dob: "1973-03-13T00:00-03:00" });
const stranger = new Person();

console.log(felipe);
console.log(john);
console.log(stranger);

console.log(felipe.getFullName());
console.log(felipe.getAge());
console.log(john.getFullName());
console.log(john.getAge());
console.log(stranger.getFullName());
console.log(stranger.getAge());
