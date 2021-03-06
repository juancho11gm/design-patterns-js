// Using Classes
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	toString() {
		return `${this.name} has ${this.age} years old.`;
	}
}

const myDog = new Animal('Simon', 5);
console.log(myDog, myDog.toString());

// Another example
class Human {
	constructor(name, age, occupation) {
		this.name = name;
		this.age = age;
		this.occupation = occupation;
	}
}

const person = new Human('Juan', 22, 'web engineer');
console.log(person);

// Using Functions
function Car(model, year, miles) {
	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = function () {
		return `${this.model} has done ${this.miles} miles`;
	};
}

const myCar = new Car('Jeep', 2022, 10000);
console.log(myCar, myCar.toString());
