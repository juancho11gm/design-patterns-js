/* 
The proxy can also act as a cache and store the requests. 
When the same request is made again, it can just return it from the cache rather than forwarding it to the target. 
This allows the target to deal with a lesser number of requests.
*/
class LibraryKiosk {
	open(app) {
		console.log(`Opening ${app}`);
	}
	connectTo(website) {
		console.log('Connecting to ' + website);
	}
}

class ProxyLibraryKiosk {
	constructor() {
		this.libraryKiosk = new LibraryKiosk();
		this.blockedApps = ['camera', 'photos', 'music', 'settings'];
		this.blockedWebsites = [
			'fb.com',
			'instagram.com',
			'snapchat.com',
			'google.com',
			'gmail.com',
		];
	}

	open(app) {
		if (this.blockedApps.includes(app)) {
			console.log(`You can't access the ${app}`);
			return;
		}

		this.libraryKiosk.open(app);
	}

	connectTo(website) {
		if (this.blockedWebsites.includes(website)) {
			console.log(`Access to ${website} denied`);
			return;
		}

		this.libraryKiosk.connectTo(website);
	}
}

const libraryKiosk = new ProxyLibraryKiosk();
libraryKiosk.open('photos');
libraryKiosk.open('music');
libraryKiosk.open('Chrome');
libraryKiosk.connectTo('booksportal.com');
libraryKiosk.connectTo('google.com');
libraryKiosk.connectTo('fb.com');
