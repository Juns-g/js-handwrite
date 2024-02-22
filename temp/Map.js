// 用对象实现Map
// 自己还没写，这个是cv的
// https://juejin.cn/post/7243437099361943608#heading-45

// TODO
// #region
class Map {
	constructor() {
		this.data = {};
	}

	set(key, value) {
		this.data[JSON.stringify(key)] = value;
	}

	get(key) {
		return this.data[JSON.stringify(key)];
	}

	delete(key) {
		delete this.data[JSON.stringify(key)];
	}

	clear() {
		this.data = {};
	}

	has(key) {
		return this.data.hasOwnProperty(JSON.stringify(key));
	}

	forEach(callback) {
		for (let prop in this.data) {
			callback(JSON.parse(prop), this.data[prop]);
		}
	}

	keys() {
		let keys = [];

		for (let prop in this.data) {
			keys.push(JSON.parse(prop));
		}

		return keys;
	}

	values() {
		let values = [];

		for (let prop in this.data) {
			values.push(this.data[prop]);
		}

		return values;
	}

	entries() {
		let entries = [];

		for (let prop in this.data) {
			entries.push([JSON.parse(prop), this.data[prop]]);
		}

		return entries;
	}
}
// #endregion

let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // 'value1'
console.log(map.has('key2')); // true
console.log(map.keys()); // ['key1', 'key2']
console.log(map.values()); // ['value1', 'value2']
console.log(map.entries()); // [['key1', 'value1'], ['key2', 'value2']]
