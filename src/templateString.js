const infos = {
	name: 'juns',
	age: 23,
	city: 'beijing',
	school: 'PKU',
};

// 纯手写
function toTemplateString(str, infos) {
	let temp = '';
	let keys = [];
	for (let char of str) {
		if (char === '}') {
			keys.push(temp.replace('${', ''));
			temp = '';
		}
		if (char === '$') temp += char;
		if (temp === '$' && char === '{') {
			temp += char;
			continue;
		}
		if (temp.startsWith('${')) {
			temp += char;
		}
	}
	let ans = str;
	keys.forEach((key) => {
		let tempStr = '${' + key + '}';
		ans = ans.replace(tempStr, infos[key]);
	});

	console.log(ans);
	return ans;
}
toTemplateString('my name is ${name},I am ${age} years old', infos);

// 正则
function toTemplateString_2(str, obj) {
	const reg = /\${(\w*)}/;
	const res = reg.exec(str);
	console.log('🚀 ~ res:', res);
	if (res) {
		//eg: res[0] 匹配到 ${num1},res[1] 匹配到 num1
		const [tmp, key] = res;
		str = str.replace(tmp, obj[key]);
		return toTemplateString_2(str, obj);
	} else {
		console.log('🚀 ~ str:', str);
		return str;
	}
}
toTemplateString_2('my name is ${name},I am ${age} years old', infos);
