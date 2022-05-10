class Subject {
	constructor() {
		this.observerList = [];
		this.newArticlePosted = false;
		this.articleName = null;
	}

	subscribe(observer) {
		this.observerList.push(observer);
	}

	unsubscribe(observer) {
		this.observerList = this.observerList.filter((obs) => obs !== observer);
	}

	notify() {
		if (!this.newArticlePosted) {
			return;
		}
		this.observerList.forEach((subscriber) => subscriber.update());
	}

	getUpdate() {
		return this.articleName;
	}

	postNewArticle(articleName) {
		this.articleName = articleName;
		this.newArticlePosted = true;
		this.notify();
	}
}

class Observer {
	constructor() {
		this.subject = new Subject();
	}

	update() {
		const articleName = this.subject.getUpdate();
		if (articleName === null) {
			console.log('No new article');
			return;
		}

		console.log(`The new article ${articleName} is posted`);
	}

	setSubject(subject) {
		this.subject = subject;
	}
}

const subject = new Subject();
const observer = new Observer();
const observer2 = new Observer();
observer.setSubject(subject);
observer2.setSubject(subject);

subject.subscribe(observer);
subject.subscribe(observer2);

subject.postNewArticle('Dark matter');

// Another example
class Auctioneer {
	constructor() {
		this.bidderList = [];
	}

	registerBidder(bidder) {
		this.bidderList.push(bidder);
	}

	notifyBidders() {
		this.bidderList.forEach((bidder) => bidder.update());
	}

	announceNewBidderPrice() {
		this.notifyBidders();
	}
}

class Bidder {
	constructor(name) {
		this.name = name;
		this.bidPrice = null;
	}

	update() {
		console.log(`${this.name} is offering ${this.bidPrice} dollars`);
		if (this.bidPrice > 500) {
			console.log(`Sold to ${this.name}`);
		}
	}

	giveNewPrice(bidPrice) {
		this.bidPrice = bidPrice;
	}
}

const auctioner = new Auctioneer();
const bidder1 = new Bidder('Ross');
auctioner.registerBidder(bidder1);

const bidder2 = new Bidder('Joey');
auctioner.registerBidder(bidder2);

bidder1.giveNewPrice(200);
bidder2.giveNewPrice(350);
auctioner.announceNewBidderPrice();

bidder1.giveNewPrice(400);
bidder2.giveNewPrice(550);
auctioner.announceNewBidderPrice();
