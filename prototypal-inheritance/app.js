// Person class
function Person(args) {
  this.firstName = args && args.firstName ? args.firstName : "Stranger";
  this.lastName = args && args.lastName ? args.lastName : "Stranger";
}

Person.prototype.greet = function() {
  return `Hello ${this.firstName} ${this.lastName}!`;
};

Person.prototype.goodbye = function() {
  return `Goodbye ${this.firstName} ${this.lastName}!`;
};

const person = new Person({
  firstName: "Felipe",
  lastName: "Almeida"
});

// Customer class (child of Person)
function Customer(args) {
  // Invoke parent constructor
  Person.call(this, args);
  this.phone = args && args.phone ? args.phone : "+55 11 12345-6789";
  this.membership = args && args.membership ? args.membership : "Standard";
}

// Inherit parent functions and properties
Customer.prototype = Object.create(Person.prototype);

// Define Customer as constructor method
Customer.prototype.constructor = Customer;

// Overload greet method
Customer.prototype.greet = function() {
  return `Hello, ${this.membership.toLowerCase()} member ${this.firstName} ${this.lastName}!`;
};

const customer = new Customer({
  firstName: "Felipe",
  lastName: "Almeida",
  phone: "+55 11 94996-1585",
  membership: "Standard"
});
