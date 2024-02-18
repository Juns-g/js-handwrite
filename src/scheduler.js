class Scheduler {
	constructor(count = 2) {
		this.maxCount = count;
		this.runCount = 0;
		this.queue = [];
	}
	add(promiseCreator) {
		return new Promise((resolve) => {
			this.queue.push(() => promiseCreator().then(resolve));
			this.run();
		});
	}
	run() {
		if (this.runCount >= this.maxCount || !this.queue.length) return;

		const promiseCreator = this.queue.shift();
		this.runCount++;
		const promise = promiseCreator();
		promise.then(() => {
			this.runCount--;
			this.run();
		});
	}
}

const scheduler = new Scheduler();

function timeout(time) {
	return () =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, time);
		});
}

function addTask(time, order) {
	scheduler.add(timeout(time)).then(() => {
		console.log(order);
	});
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

// Scheduler最多支持两个正在处理的promise，最终打印顺序是2 3 1 4
