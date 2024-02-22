const obj1 = {
	a: {
		b: {
			c: 2,
			d: 5,
		},
		e: {
			f: 1,
			h: {
				i: 3,
			},
		},
	},
	j: 4,
};

const ans1 = { 'a.b.c': 2, 'a.b.d': 5, 'a.e.f': 1, 'a.e.h.i': 3, j: 4 };

const obj2 = {
	a: 1,
	b: [1, 2, { c: true }],
	c: { e: 2, f: 3 },
	g: null,
};

const ans2 = {
	a: 1,
	'b[0]': 1,
	'b[1]': 2,
	'b[2].c': true,
	'c.e': 2,
	'c.f': 3,
	g: null,
};

export function flatObj(obj) {
	let res = {};
	const dfs = (cur, path = '') => {
		const isArr = Array.isArray(cur);
		if (typeof cur === 'object' && cur !== null) {
			for (let key in cur) {
				const newPath = path ? (isArr ? `${path}[${key}]` : `${path}.${key}`) : key;
				dfs(cur[key], newPath);
			}
		} else {
			res[path] = cur;
		}
	};
	dfs(obj);
	return res;
}

console.log(flatObj(obj1));
console.log(flatObj(obj2));
