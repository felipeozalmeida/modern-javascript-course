// Person prototype
const personPrototype = {
  greet: function() {
    return `Hello ${this.firstName} ${this.lastName}!`;
  },
  goodbye: function() {
    return `Goodbye ${this.firstName} ${this.lastName}!`;
  }
};

const person = Object.create(personPrototype, {
  firstName: { value: "Felipe" },
  lastName: { value: "Almeida" }
});

// Customer prototype (inherits Person)
const customerPrototype = Object.create(personPrototype, {
  // Overload greet method
  greet: {
    value: function() {
      return `Hello ${this.membership.toLowerCase()} member ${this.firstName} ${this.lastName}!`;
    }
  }
});

const customer = Object.create(customerPrototype, {
  firstName: { value: "Felipe" },
  lastName: { value: "Almeida" },
  membership: { value: "Standard" }
});
