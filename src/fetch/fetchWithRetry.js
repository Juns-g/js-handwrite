import { getRandomData, sleep } from './base.js'

const fetchWithRetry = async (fn, retires = 3, delay = 1000) => {
	for (let i = 1; i <= retires; i++) {
		try {
			const res = await fn()
			if (!res.ok) throw new Error('Fetch failed')
			return res.data
		} catch (err) {
			if (i === retires) throw err
			await sleep(delay)
		}
	}
}

const data = await fetchWithRetry(getRandomData)
console.log(data)
