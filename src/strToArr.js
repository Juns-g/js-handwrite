let str = `
1 2 4342    3 4 5
23 4
    4  5
`;

let equalStr = '\n1 2 4342    3 4 5\n23 4\n    4  5\n';

let ans = [
	[1, 2, 4342, 3, 4, 5],
	[23, 4],
	[4, 5],
];

export function strToArr(str) {
	const res = str.split('\n').filter((item) => item !== '');
	const myAns = [];
	res.forEach((item) => {
		const stringArr = item.split(' ').filter((item) => item !== '');
		myAns.push(stringArr.map(Number));
	});
	return myAns;
}

console.log('🚀 ~ strToArr(str):', strToArr(str));

// 正则
export function strToArr_2(str) {
	return str
		.trim()
		.split(/\s*\n\s*/)
		.map((line) => line.split(/\s+/).map(Number));
}

console.log('🚀 ~ strToArr_2(str):', strToArr_2(str));

export function strToArr_3(str) {
	return str
		.trim()
		.split('\n')
		.map((line) =>
			line
				.split(' ')
				.filter((item) => item !== '')
				.map(Number),
		);
}
console.log('🚀 ~ strToArr_3(str):', strToArr_3(str));
