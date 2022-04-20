class IOSButton {
	constructor() {
		this.os = 'iOS';
		this.message = function () {
			console.log(`Hello from ${this.os}`);
		};
	}
}

class AndroidButton {
	constructor() {
		this.os = 'Android';
		this.message = function () {
			console.log(`Hello from ${this.os}`);
		};
	}
}

class ButtonFactory {
	createButton(operatingSystem) {
		if (operatingSystem == 'iOS') {
			return new IOSButton();
		}
		return new AndroidButton();
	}
}

const factory = new ButtonFactory();
const myButton = factory.createButton('iOS');
myButton.message();

// Another example

class Toy {
	constructor(color, price) {
		this.color = color;
		this.price = price;
	}
}

class ToyDuck extends Toy {
	constructor(color, price) {
		super(color, price);
	}
}

class ToyCar extends Toy {
	constructor(color, price, name) {
		super(color, price);
		this.name = name;
	}
}

class ToyFactory {
	createToy({ toyType, color, price, name }) {
		if (toyType === 'duck') {
			return new ToyDuck(color, price);
		}
		return new ToyCar(color, price, name);
	}
}

const toyFactory = new ToyFactory();
const car = toyFactory.createToy({
	toyType: 'car',
	color: 'blue',
	price: 12,
	name: 'honda',
});

const duck = toyFactory.createToy({
	toyType: 'duck',
	color: 'yellow',
	price: 5,
});

console.log(car, car instanceof ToyCar);
console.log(duck, duck instanceof ToyDuck);
