// 1.问题描述
// 请手动实现一个简单版本的 Promise 类，要求支持 .then() 和 .catch() 方法。该 Promise 类应该具备以下特性：

// 状态管理：Promise 有三种状态：pending、fulfilled 和 rejected。
// 方法：
// then(onFulfilled?: Function, onRejected?: Function): Promise：注册回调函数，当 Promise 被解决或拒绝时调用。
// catch(onRejected?: Function): Promise：注册拒绝回调函数。
// 支持链式调用：由于 then() 和 catch() 方法返回一个新的 Promise，允许链式调用。
// 处理异步回调：确保在异步环境中能够正确调用回调。
// 错误处理：如果在 then() 或 catch() 中抛出错误，应该被下一个 catch() 捕获。

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Promise {
	constructor() {
		this.state = PENDING
		this.resolveQueue = []
		this.rejectQueue = []
		this.resolveValue = null
		this.rejectValue = null
	}
	onFulfilled(fn) {
		if (fn instanceof Promise) {
		}
		if (this.state === PENDING) {
			this.state = FULFILLED
			this.resolveQueue.push(fn)
		}
	}
	onRejected(fn) {
		if (this.state === PENDING) {
			this.state = REJECTED
			this.rejectQueue.push(fn)
		}
	}
	// 存值进来
	resolve(val) {
		this.resolveValue = val
	}
	reject(val) {
		this.rejectValue = val
	}
}
Promise.prototype.then = function (onFulfilled, onRejected) {
	onResolve = typeof onFulfilled === 'function' ? onFulfilled : () => {}
	onRejected =
		typeof onRejected === 'function'
			? onRejected
			: () => {
					throw Error('promise error')
			  }
	if (this.state === PENDING) {
		this.resolveQueue.push(onResolve)
		this.rejectQueue.push(onRejected)
	}
	if (this.state === FULFILLED) {
		try {
			onResolve(this.resolveValue)
		} catch (err) {
			throw Error('onResolve error')
		}
	}
	if (this.state === REJECTED) {
		try {
			onRejected(this.resolveValue)
		} catch (err) {
			throw Error('onResolve error')
		}
	}
}

Promise.prototype.catch = function (onFulfilled) {
	return Promise.then(onFulfilled, null)
}

// 2. 背景：

// 你正在开发一个社交媒体应用，用户可以在其动态墙上显示两列 feed。每个 feed 的内容都有一个高度（表示显示这些内容所需的空间），并且为了保证美观，两个 feed 的高度尽量一致。

// 问题描述：

// 给定一个整数数组 heights，其中每个元素表示单个 feed 的高度。你需要将这个数组分成两个子集，使得两个子集的总高度差最小。

// 请你计算并返回最小的高度差。

// 输入
// 一个整数数组 heights，其中 1 <= heights.length <= 20，1 <= heights[i] <= 1000。
// 输出
// 返回最小的高度差。输入
// heights = [1, 2, 3, 4, 5]
// [1, 1000, 32, 999]
//输出‘
//1;

function deal(arr) {
	const n = arr.length
	arr.sort((a, b) => a - b)
	// 接近 0;
	let res = 0
	for (let i = 0; i < arr.length; i++) {
		if (res > 0) {
			res -= arr[i]
		} else {
			res += arr[i]
		}
	}
	return res
}
console.log(deal(heights))

function deal2(arr) {
	const n = arr.length
	arr.sort((a, b) => a - b)
	let dis = [],
		idx = 0
	const flag = n % 2 === 0
	if (flag) {
		for (let i = 0; i < arr.length; i += 2) {
			dis[idx] = arr[i + 1] - arr[i1]
		}
	} else {
		dis[idx++] = arr[0]
		for (let i = 1; i < arr.length; i += 2) {
			dis[idx] = arr[i + 1] - arr[i1]
		}
	}
	// 接近 0;
	let res = 0
	for (let i = dis.length - 1; i >= 0; i--) {
		if (res > 0) {
			res -= dis[i]
		} else {
			res += dis[i]
		}
	}
	return res
}
