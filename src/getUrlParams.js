// url解析

// 浏览器api实现
export const getUrlParams = (url) => Object.fromEntries(new URL(url).searchParams.entries());

// 手写，不用浏览器的api
export function getUrlParams_1(url) {
	if (!url.includes('?')) return {};
	let str = url.split('?')[1];
	if (str.includes('#')) str = str.split('#')[0];
	const arr = str.split('&');
	const obj = {};
	for (let item of arr) {
		const [key, val] = item.split('=');
		obj[key] = val;
	}
	return obj;
}

// 正则
export function getUrlParams_2(url) {
	if (!url.includes('?')) return {};
	let str = url;
	if (str.includes('#')) str = str.split('#')[0];
	const reg = /([^?&=]+)=([^?&=]*)/g;
	const obj = {};
	str.replace(reg, (_, k, v) => {
		obj[k] = v ?? '';
	});
	return obj;
}
