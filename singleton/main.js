let instance = null;

const privateMethod = () => {
	console.log('Private method');
};

const privateVariable = 'Private variable';
const randomNumber = Math.random();

class MySingleton {
	constructor(props) {
		if (!instance) {
			this.publicProperty = 'Public property';
			instance = this;
		}

		return instance;
	}

	publicMethod() {
		console.log('Public method');
	}

	getRandomNumber() {
		return randomNumber;
	}
}

const obj1 = new MySingleton();
const obj2 = new MySingleton();
console.log(obj1 === obj2);
obj1.publicMethod();
console.log(obj1.getRandomNumber());
console.log(obj1.publicProperty);

// Another example
let configureValsInstance = null;
class ConfigureVals {
	constructor(xpoint = 0, ypoint = 0, shape = null) {
		if (!configureValsInstance) {
			this.xpoint = xpoint;
			this.ypoint = ypoint;
			this.shape = shape;
			configureValsInstance = this;
		}

		return configureValsInstance;
	}
}

const configureVals1 = new ConfigureVals(1, 2, 'rectangle');
const configureVals2 = new ConfigureVals();
console.log(configureVals1 === configureVals2);
console.log(configureVals1);
console.log(configureVals2);
