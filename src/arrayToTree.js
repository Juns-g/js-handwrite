var data = [
	{ id: 12, parentId: 1, name: '朝阳区' },
	{ id: 241, parentId: 24, name: '田林街道' },
	{ id: 31, parentId: 3, name: '广州市' },
	{ id: 13, parentId: 1, name: '昌平区' },
	{ id: 2421, parentId: 242, name: '上海科技绿洲' },
	{ id: 21, parentId: 2, name: '静安区' },
	{ id: 242, parentId: 24, name: '漕河泾街道' },
	{ id: 22, parentId: 2, name: '黄浦区' },
	{ id: 11, parentId: 1, name: '顺义区' },
	{ id: 2, parentId: 0, name: '上海市' },
	{ id: 24, parentId: 2, name: '徐汇区' },
	{ id: 1, parentId: 0, name: '北京市' },
	{ id: 2422, parentId: 242, name: '漕河泾开发区' },
	{ id: 32, parentId: 3, name: '深圳市' },
	{ id: 33, parentId: 3, name: '东莞市' },
	{ id: 3, parentId: 0, name: '广东省' },
	{ id: 0, parentId: null, name: '广东省' },
];
function arrayToTree(arr) {
	var map = {};
	arr.forEach(function (item) {
		map[item.id] = item;
	});
	var res = {};
	for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
		var item = arr_1[_i];
		if (item.parentId === null) {
			res = item;
			continue;
		}
		var parent_1 = map[item.parentId];
		if (!(parent_1 === null || parent_1 === void 0 ? void 0 : parent_1.children)) {
			parent_1.children = [];
		} else {
			parent_1.children.push(item);
		}
	}
	console.log('🚀 ~ res:', res);
	return res;
}
arrayToTree(data);
// export {};
