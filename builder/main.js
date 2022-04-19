// The Builder patter is useful when creating complex objects.
// This pattern can help to hide the construction process of building these objects.
class HotDog {
	constructor(bread, ketchup, mustard, kraud) {
		this.bread = bread;
	}

	addKetchup() {
		this.ketchup = true;
		return this;
	}

	addMustard() {
		this.mustard = true;
		return this;
	}

	addKraut() {
		this.kraut = true;
		return this;
	}
}

const myHotDog = new HotDog('gluten free');
// Method chaining provides a flexible step by step rather than a constructor
myHotDog.addKetchup().addMustard().addKraut();
console.log(myHotDog);

// Another example
class Assignment {
	make(builder) {
		builder.step1();
		builder.step2();
		builder.step3();
		builder.step4();
		return builder.get();
	}
}

class AssignmentBuilder {
	constructor(subject, level, dueDate) {
		this.assignment = null;

		this.step1 = function () {
			this.assignment = new Course();
		};

		this.step2 = function () {
			this.assignment.addSubject(subject);
		};

		this.step3 = function () {
			this.assignment.addLevel(level);
		};

		this.step4 = function () {
			this.assignment.addDueDate(dueDate);
		};

		this.get = function () {
			return this.assignment;
		};
	}
}

class Course {
	constructor() {
		this.subject = null;
		this.level = null;
		this.dueDate = null;
	}

	addSubject(subject) {
		this.subject = subject;
	}

	addLevel(level) {
		this.level = level;
	}

	addDueDate(dueDate) {
		this.dueDate = dueDate;
	}

	announcement() {
		console.log(
			`Your ${this.subject} assignment's difficulty level is: ${this.level}. It is due on ${this.dueDate}.`
		);
	}
}

try {
	const assignment = new Assignment();
	const assignmentBuilder = new AssignmentBuilder(
		'Math',
		'Hard',
		'12th June, 2020'
	);
	const mathAssignment = assignment.make(assignmentBuilder);
	mathAssignment.announcement();
} catch (e) {
	console.log(e);
}
