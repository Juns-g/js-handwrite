const object = { a: [{ b: { c: 3 } }] };

function get(obj, path) {
	if (typeof path !== 'string') {
		throw new Error('path must to be string');
	}
	const arr = path.replaceAll('[', '.').replaceAll(']', '').split('.');
	console.log('🚀 ~ arr:', arr);
	let ans = obj;
	arr.forEach((item) => {
		ans = ans[item] ?? undefined;
	});
	return ans;
}

console.log(get(object, 'a[0].b.c')); // 3
