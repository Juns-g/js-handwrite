const sleep = (timeS, logContent) =>
	new Promise((resolve) => {
		setTimeout(() => {
			console.log(logContent)
			resolve(logContent)
		}, 1000 * timeS)
	})

const p1 = sleep(1, 'p1')
const p2 = sleep(1, 'p2')

Promise.myAll = (promises) => {
	return new Promise((resolve, reject) => {
		const res = new Array(promises.length)
		let cnt = 0
		for (const k in promises) {
			Promise.resolve(promises[k])
				.then((r) => {
					res[k] = r
					console.log('🚀 ~ res:', res)
					cnt++
					if (cnt === promises.length) resolve(res)
				})
				.catch((err) => {
					reject(err)
				})
		}
	})
}

const ans = await Promise.myAll([p1, p2])
console.log('🚀 ~ ans:', ans)
