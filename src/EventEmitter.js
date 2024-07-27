export class EventEmitter {
	constructor() {
		this.eventMap = {}
	}

	// 为一个事件添加订阅
	on(type, cb) {
		if (!this.eventMap[type]) {
			this.eventMap[type] = [cb]
		} else {
			this.eventMap[type].push(cb)
		}
	}

	// 取消订阅
	off(type, cb) {
		if (!this.eventMap[type]) return
		this.eventMap[type] = this.eventMap[type].filter((item) => item !== cb)
	}

	// 发布，触发订阅的函数
	emit(type, ...args) {
		if (!this.eventMap[type]) return
		this.eventMap[type].forEach((cb) => {
			cb(...args)
		})
	}

	// 只执行一次
	once(type, cb) {
		this.on(type, (...args) => {
			cb(...args)
			this.off(type, cb)
		})
	}
}

let ev = new EventEmitter()

const fn = (str) => {
	console.log(str)
}

ev.on('run', fn)
ev.emit('run', 'hello')

ev.on('say', fn)
ev.emit('say', 'world')
