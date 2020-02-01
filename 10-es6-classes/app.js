class Person {
  static addNumbers(x, y) {
    return x + y;
  }
  constructor(args) {
    this.firstName = args && args.firstName ? args.firstName : "Stranger";
    this.lastName = args && args.lastName ? args.lastName : "Stranger";
    this.birthday = args && args.dob ? new Date(args.dob) : new Date();
  }
  getAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  greet() {
    return `Hello ${this.firstName} ${this.lastName}!`;
  }
}

const felipe = new Person({
  firstName: "Felipe",
  lastName: "Almeida",
  dob: "1998-07-04T08:34-03:00"
});
