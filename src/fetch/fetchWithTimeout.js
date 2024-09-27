import { getRandomTimeData } from './base'

const fetchWithTimeout = async (fn, timeout = 1000) => {
	const { signal, abort } = new AbortController()
	const abortId = setTimeout(abort, timeout)
	// TODO
	try {
		const res = await getRandomTimeData()
	} catch (err) {}
}
