class User {
	constructor(name, userID) {
		this.name = name;
		this.userID = userID;
		this.chatbox = null;
	}

	sendMessage(message, sendTo) {
		this.chatbox.send(message, this, sendTo);
	}

	receiveMessage(message, receiveFrom) {
		console.log(`${receiveFrom.name} sent the message: ${message}`);
	}
}

class ChatBox {
	constructor() {
		this.users = [];
	}

	register(user) {
		this.users[user.userId] = user;
		user.chatbox = this;
	}

	send(message, receiveFrom, sendTo) {
		sendTo.receiveMessage(message, receiveFrom);
	}
}

const chatbox = new ChatBox();
const juan = new User('juan', 1);
const sebastian = new User('sebastian', 2);
chatbox.register(juan);
chatbox.register(sebastian);
juan.sendMessage('Hello Sebastian', sebastian);
sebastian.sendMessage('Hello Juan', juan);

// Another example

class Employee {
	constructor(hr, name, role, salary) {
		this.hr = hr;
		this.name = name;
		this.role = role;
		this.salary = salary;
	}
}

class Worker extends Employee {
	constructor(hr, name, role, salary) {
		super(hr, name, role, salary);
	}

	receiveRaise(raise) {
		this.salary += raise;
		console.log(`My new pay is ${this.salary} dollars`);
	}
}

class Manager extends Employee {
	constructor(hr, name, role, salary) {
		super(hr, name, role, salary);
	}

	receiveMessage(worker, raise) {
		console.log(`${worker.name} should get ${raise} dollar raise`);
	}

	approveRaise(worker, raise) {
		console.log(`${worker.name}'s ${raise} dollar raise is approved`);
		return true;
	}
}

class HR {
	constructor() {
		this.employees = [];
	}

	registerEmployee(employee) {
		this.employees.push(employee);
	}

	scheduleRaise(raise, worker, manager) {
		manager.receiveMessage(worker, raise);
		const answer = manager.approveRaise(worker, raise);
		if (answer) worker.receiveRaise(raise);
	}
}

const hr = new HR();
const employee = new Worker(hr, 'Joe', 'Developer', 1400);
const manager = new Manager(hr, 'Allen', 'Team Lead', 3000);
hr.scheduleRaise(200, employee, manager);
