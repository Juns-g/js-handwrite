// 给定形如 'a.b.c.d' 的字符串，构造一个对象如下: { a:{ b:{ c:{ d:null } } } }

function createObj(path) {
	const keys = path.split('.');
	let res = {};
	let temp = res;
	keys.forEach((key) => {
		if (key === keys.at(-1)) {
			temp[key] = null;
		} else {
			temp[key] = {};
			temp = temp[key];
		}
	});
	return res;
}

console.log(createObj('a.b.c.d'));
