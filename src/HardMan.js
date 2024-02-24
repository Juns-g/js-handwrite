class HardMan {
	constructor(name) {
		this.queue = [];
		this.name = name;
		console.log(this.name);
	}
	rest(wait) {
		const fn = () => {
			setTimeout(() => {
				console.log(wait);
				this.next();
			}, wait * 1000);
		};
		this.queue.push(fn);
		return this;
	}
	restFirst(wait) {
		const fn = () => {
			setTimeout(() => {
				console.log(wait);
				this.next();
			}, wait * 1000);
		};
		this.queue.unshift(fn);
		return this;
	}
	learn(str) {
		const fn = () => {
			console.log('learning', str);
		};
		this.queue.push(fn);
		this.next();
		return this;
	}
	next() {
		if (this.queue.length === 0) return;
		const fn = this.queue.shift();
		fn();
	}
}

let man = new HardMan('jack');
man.rest(3).learn('1');
