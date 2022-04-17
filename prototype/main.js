// Creates objects based on a template of an existing object through cloning.
// Alternative way to do inheritance.
// Inheritance can lead to complex hierarchy of code.

const car = {
	drive() {
		return 'Driving 🏎';
	},
};

// myCar it's inheriting from an object (car)
const myCar = Object.create(car, { name: { value: 'Ferrari' } });
console.log(myCar);
console.log('prototype', myCar.__proto__);
console.log('prototype good practice', Object.getPrototypeOf(myCar));

// We can extend a class with additional functions.
// But it is considered a bad practice.

Array.prototype.bad = function () {
	console.log('bad practice');
};

[].bad();

// Example

function Ninja(name, points = 100) {
	this.name = name;
	this.points = points;

	// We could create the punch and kick functions right here.
	// However, both the instances ninja1 and ninja2 get their copies of the punch and kick function upon instantiation.
	// Imagine making a 1000 instances that would mean a 1000 copies of both these function for all 1000 instances!
	// This will clutter the memory very easily.
}

Ninja.prototype.punch = function (target) {
	if (this.points > 0 && target.points > 0) {
		target.points -= 20;
		console.log(`${target.name} points are ${target.points}`);
		return;
	}

	console.log(`Can't punch ${target.name}`);
};

Ninja.prototype.kick = function (target) {
	if (this.points > 0 && target.points > 0) {
		target.points -= 50;
		console.log(`${target.name} points are ${target.points}`);
		return;
	}

	console.log(`Can't kick ${target.name}`);
};

const ninja1 = new Ninja('Ninja1');
const ninja2 = new Ninja('Ninja2');
ninja1.kick(ninja2);
ninja2.punch(ninja1);
ninja1.kick(ninja2);
ninja1.punch(ninja2);
ninja2.kick(ninja1);
console.log(ninja1.kick === ninja2.kick);
console.log(ninja1.punch === ninja2.punch);
