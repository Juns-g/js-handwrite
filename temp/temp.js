class Scheduler {
	constructor() {
		// 补充代码
	}
	add(promiseCreator) {
		// 补充代码
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
