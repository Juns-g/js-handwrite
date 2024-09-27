const data = [
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
]

const arrayToTree = (data) => {
	const map = new Map()
	let tree = null
	for (const node of data) {
		node.children = []
		map.set(node.id, node)
	}
	for (const node of data) {
		const parentNode = map.get(node.parentId)
		if (parentNode) {
			parentNode.children.push(node)
		} else {
			tree = node
		}
	}
	return tree
}

console.log(arrayToTree(data))
