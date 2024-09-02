class Task {
	constructor() {
		this.queue = []
	}
	add(fn, context, ...args) {
        this.queue.push(
            ()=> new Promise(resolve=>{
                fn()
            })
        )
    }
	run() {

    }
	stop() {

    }
}

function task1(next) {
	setTimeout(() => {
		console.log('red')
		next()
	}, 3000)
}

function task2(next, b) {
	setTimeout(() => {
		console.log(b)
		next()
	}, 1000)
}

function task3(next, c) {
	setTimeout(() => {
		console.log('yellow')
		next()
	}, 2000)
}

let task = new Task()
task.add(task1).add(task2, null, 3).add(task3)
task.run()
