export const getRandomData = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			const res = Math.random() > 0.8 ? { ok: true, data: 'Data' } : { ok: false }
			resolve(res)
		}, 1000)
	})

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const getRandomTimeData = async () => {
	const sleepTime = Math.random() * 2 * 1000
	console.log('🚀 ~ sleepTime:', sleepTime)
	await sleep(sleepTime)
	return { ok: true, data: 'Data' }
}
