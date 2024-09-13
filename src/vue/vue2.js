class Vue {
	constructor(options) {
		console.log('🚀 ~ options:', options)
		this.$options = options
		this.$data = options.data
		this.$methods = options.methods
		observe(this.$data)
		new Compile(options.el, this)
	}
}

function observe(data) {
	if (typeof data !== 'object' || data === null) {
		return data
	}
	Object.keys(data).forEach((key) => {
		defineReactive(data, key, data[key])
	})
}

function defineReactive(obj, key, val) {
	observe(val) // 递归所有属性的值
	const dep = new Dep()
	Object.defineProperty(obj, key, {
		get() {
			dep.depend()
			console.log('🚀 ~ dep:', dep)
			return val
		},
		set(newVal) {
			if (val === newVal) return val
			val = newVal
			dep.notify()
		},
	})
}

// 存放依赖
class Dep {
	constructor() {
		this.subs = []
	}
	notify() {
		this.subs.forEach((effect) => {
			effect.update()
		})
	}
	depend() {
		if (!window.nowWatcher || this.subs.includes(window.nowWatcher)) {
			return
		}
		this.subs.push(window.nowWatcher)
	}
}

class Watcher {
	constructor(vm, exp, callback) {
		this.cb = callback
		this.vm = vm
		this.exp = exp
		this.value = this.get()
	}
	get() {
		window.nowWatcher = this
		const val = this.vm.$data[this.exp]
		window.nowWatcher = null
		return val
	}
	update() {
		const oldVal = this.value
		const newVal = this.get()
		this.cb.call(this.vm, newVal, oldVal)
	}
}

class Compile {
	constructor(el, vm) {
		this.vm = vm
		const dom = document.querySelector(el)
		this.compile(dom)
	}
	compile(node) {
		const childNodes = node.childNodes
		childNodes.forEach((cNode) => {
			console.dir(cNode)
			//  {{ }}
			if (this.isInter(cNode)) {
				this.compileText(cNode)
			} else {
				if (!cNode.attributes) return
				const attrs = cNode.attributes
				Array.from(attrs).forEach((attr) => {
					const { name: attrName, value: exp } = attr
					if (attrName.startsWith('v-bind:')) {
						const attrValue = attrName.substring(7)
						this.vBind(cNode, attrValue, exp)
						return
					}
					if (attrName.startsWith('v-')) {
						const type = attrName.substring(2)
						this[type](cNode, exp)
						return
					}
					if (attrName.startsWith('@')) {
						const type = attrName.substring(1)
						this[type](cNode, exp)
					}
				})
			}
		})
	}
	isInter(node) {
		const reg = /\{\{(.*)\}\}/
		return reg.test(node.textContent)
	}
	getInter(node) {
		const reg = /\{\{(.*)\}\}/
		const exp = node.textContent.replace(reg, '$1').trim()
		return exp
	}
	compileText(node) {
		const exp = this.getInter(node)
		node.textContent = this.vm.$data[exp]
		new Watcher(this.vm, exp, (val) => {
			node.textContent = val
		})
	}
	model(node, exp) {
		console.log('🚀 ~ model:')
		node.value = this.vm.$data[exp]
		new Watcher(this.vm, exp, (val) => {
			node.value = val
		})
		node.addEventListener('input', (event) => {
			this.vm.$data[exp] = event.target.value
		})
	}
	click(node, exp) {
		console.log('🚀 ~ exp:', exp)
		const fn = this.vm.$methods[exp]
		node.onclick = () => {
			fn.call(this.vm)
		}
	}
	vBind(node, attrValue, exp) {
		console.dir(node)
		node[attrValue] = this.vm.$data[exp]
		new Watcher(this.vm, exp, (val) => {
			node[attrValue] = val
		})
	}
}
