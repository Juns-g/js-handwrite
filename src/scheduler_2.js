//JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
class Scheduler {
	constructor() {
		this.runCount = 0
		this.maxCount = 2
		this.queue = []
	}
	add(task) {
		return new Promise((resolve) => {
			this.queue.push(() => task().then(resolve))
			this.run()
		})
	}
	run() {
		if (this.runCount >= this.maxCount || !this.queue.length) return
		const task = this.queue.shift()
		this.runCount++
		task().then(() => {
			this.runCount--
			this.run()
		})
	}
}

const timeout = (time) =>
	new Promise((resolve) => {
		setTimeout(resolve, time)
	})

const scheduler = new Scheduler()
const addTask = (time, order) => {
	scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4
