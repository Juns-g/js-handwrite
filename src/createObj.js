// 给定形如 'a.b.c.d' 的字符串，构造一个对象如下: { a:{ b:{ c:{ d:null } } } }
// ! 字节考过，2024.2.23 商业化三面

function createObj(path) {
	const keys = path.split('.');
	let res = {};
	let cur = res;
	keys.forEach((key) => {
		if (key === keys.at(-1)) {
			cur[key] = null;
		} else {
			cur[key] = {};
			cur = cur[key];
		}
	});
	return res;
}

console.log(createObj('a.b.c.d'));
