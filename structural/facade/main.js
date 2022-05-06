class Inventory {
	constructor() {
		this.shampoosAmount = 20;
		this.conditionerAmount = 20;
		this.hairSerumsAmount = 20;
	}

	checkInventory({ productName, amount }) {
		const productsDictionary = {
			shampo: this.shampoosAmount,
			conditioner: this.conditionerAmount,
			'hair serum': this.hairSerumsAmount,
		};

		if (productsDictionary[productName] < amount) return false;
		return true;
	}
}

class BuyingProduct extends Inventory {
	buyProduct({ productName, amount }) {
		let order = new PreOrderProduct();

		if (this.checkInventory({ productName, amount })) {
			order = new BuyProduct();
		}

		return order.showDetails({ productName, amount });
	}
}
class BuyProduct {
	showDetails({ amount, productName }) {
		console.log(
			`${amount} bottles of ${productName} are available. Click on "buy" to purchase them.`
		);
	}
}

class PreOrderProduct {
	showDetails({ amount, productName }) {
		console.log(
			`${amount} bottles of ${productName} are not available. You can Pre-order them on the next page.`
		);
	}
}

const customer = new BuyingProduct();
customer.buyProduct({ productName: 'shampoo', amount: 2 });
customer.buyProduct({ productName: 'hair serum', amount: 2000 });
