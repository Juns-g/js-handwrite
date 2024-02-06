const obj1 = {
	name: 'obj',
	age: 21,
	info: {
		desc: '我是obj11111',
	},
};

// 浅拷贝就是只拷贝一层，通用且没那么消耗性能

// 解构
const obj2 = { ...obj1 };

// 对象只拷贝了地址，所以会都改变
obj2.info.desc = 2222;
console.log('🚀 ~ obj2:', obj2);
console.log('🚀 ~ obj1:', obj1);

// API
const obj3 = {};
Object.assign(obj3, obj1);

// for in
const obj4 = {};
for (let key in obj) {
	obj4[key] = obj[key];
}
