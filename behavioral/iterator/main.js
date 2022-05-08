class Iterator {
	constructor(elements) {
		this.index = 0;
		this.elements = elements;
	}

	next() {
		return this.elements[this.index++];
	}

	hasNextElement() {
		return this.index <= this.elements.length;
	}

	first() {
		this.index = 0;
		return this.next();
	}
}

function iterate() {
	const items = ['Yello', 'Green', 'Blue'];
	const iterator = new Iterator(items);
	for (
		let item = iterator.first();
		iterator.hasNextElement();
		item = iterator.next()
	) {
		console.log(item);
	}
}

iterate();

// Another example
class ReverseIterator {
	constructor(obj) {
		this.elements = Object.values(obj);
		this.index = this.elements.length - 1;
	}

	hasprevElement() {
		return this.index >= -1;
	}

	last() {
		this.index = this.elements.length - 1;
		return this.previous();
	}

	previous() {
		return this.elements[this.index--];
	}
}

function reverseIterate() {
	const test = {
		name: 'Anne',
		age: '23',
		gender: 'Female',
		Occupation: 'Engineer',
	};
	const iterator = new ReverseIterator(test);

	for (
		let item = iterator.last();
		iterator.hasprevElement();
		item = iterator.previous()
	) {
		console.log(item);
	}
}

reverseIterate();
