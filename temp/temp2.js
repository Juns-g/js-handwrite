class Man {
	constructor(name) {
		this.name = name
		this.queue = []
		this.sayHi()
	}
	sayHi() {
		this.queue.push(() => {
			console.log(`Hi!this is ${this.name}`)
			this.next()
		})
	}
	sleep(time) {
		this.queue.push(() => {
			setTimeout((params) => {
				console.log('wake up after' + time)
				this.next()
			}, time * 1000)
		})
		return this
	}
	sleepFirst(time) {
		this.queue.unshift(() => {
			setTimeout(() => {
				console.log(`等待${time}秒`)
				this.next()
			}, time * 1000)
		})
		return this
	}
	eat() {
		this.queue.push(() => {
			console.log('eat')
			this.next()
		})
	}
	next() {
		const task = this.queue.shift()
		task && task()
	}
}

new Man('Hank').sleep(2).sleepFirst(3).eat('supper')

function fun(e) {
	this.e = e
	this.queue = []
	this.sayHi = function () {
		this.queue.push(() => {
			console.log(`Hi!this is ${this.e}`)
			this.next()
		})
	}
	this.eat = function (e) {
		this.queue.push(() => {
			console.log(`Eat ${e}~`)
		})
		return this
	}
	this.sleep = function (num) {
		this.queue.push(() => {
			setTimeout(() => {
				console.log(`Wake up after ${num}`)
				this.next()
			}, num * 1000)
		})
		return this
	}
	this.sleepFirst = function (num) {
		this.queue.unshift(() => {
			setTimeout(() => {
				console.log(`等待${num}秒`)
				this.next()
			}, num * 1000)
		})
		return this
	}
	this.next = function () {
		let fn = this.queue.shift()
		fn && fn()
	}
	this.sayHi()
	setTimeout(() => {
		this.next()
	})
	return this
}

new fun('Hank').sleep(2).sleepFirst(3).eat('supper')
