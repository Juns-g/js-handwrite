// 数字转字符串，1234567890 → ‘1,234,567,890’
let n = 1234567890;

// 原生方法
export function numToStr_1(n) {
	return n.toLocaleString();
}
console.log(numToStr_1(n));

// 时间空间都是 O(n), n指的是数字的位数
export function numToStr_2(n) {
	let arr = String(n).split('');
	let s = '';
	let count = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		let char = arr[i];
		if (char === '.') {
			s += char;
			count = 0;
			continue;
		}
		if (count && count % 3 === 0) {
			s += ',';
			s += char;
			count++;
			continue;
		}
		s += char;
		count++;
	}
	return s.split('').reverse().join('');
}

console.log(numToStr_2(n));

// 正则实现
export function numToStr_3(n) {
	let reg = /(?!^)(?=(\d{3})+$)/g;
	let s = String(n).replace(reg, ',');
	return s;
}

console.log(numToStr_3(n));
