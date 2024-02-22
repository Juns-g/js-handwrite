const obj = {
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

const res = {};
const flatten = (obj, k) => {
	if (typeof obj === 'number') {
		const key = k.slice(1).join('');
		res[key] = obj;
		return;
	}

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			flatten(obj[key], [...k, '.', key]);
		}
	}
};
flatten(obj, []);
console.log(res);
