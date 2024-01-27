// 实现一个链表，要求实现以下功能
// 1. addAtTail(element)：向链表尾部添加一个新元素
// 2. add(position, element)：向链表的特定位置插入一个新元素
// 3. remove(element)：从链表中移除一项
// 4. indexOf(element)：返回元素在链表中的索引，如果链表中没有该元素则返回-1
// 5. removeAt(position)：从链表的特定位置移除一项
// 6. isEmpty()：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false
// 7. size()：返回链表包含的元素个数
// 8. toString()：由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值
// 9. print()：打印链表元素
// 10. getHead()：获取链表头部元素
// 11. getTail()：获取链表尾部元素
// 12. reverse()：反转链表
// 13. removeHead()：删除链表头部元素
// 14. removeTail()：删除链表尾部元素
// 15. insertAfter(element, target)：在指定元素后插入新元素
// 16. insertBefore(element, target)：在指定元素前插入新元素
// 17. findNode(element)：查找指定元素
// 18. findNodeAt(position)：查找指定位置的元素
// 19. findPrevNode(element)：查找指定元素的前一个元素
// 20. findPrevNodeAt(position)：查找指定位置的前一个元素
// 21. findNextNode(element)：查找指定元素的后一个元素
// 22. findNextNodeAt(position)：查找指定位置的后一个元素
// 23. findMidNode()：查找链表的中间元素
// 24. findMidNodeNode()：查找链表的中间节点
// 25. hasCircle()：判断链表是否有环
// 26. getCircle()：获取链表环
// 27. getCircleNode()：获取链表环节点
// 28. getCircleLength()：获取链表环长度
// 29. getCircleEntry()：获取链表环入口
// 30. merge(list)：合并两个有序链表
// 31. mergeSort()：链表归并排序
// 32. removeRepetition()：删除链表重复元素
// 34. isPalindrome()：判断链表是否为回文链表

export class MyNode {
	constructor(public val: number | null, public next?: MyNode | null) {}
}

export class LinkedList {
	private size: number;
	private dummyHead: MyNode;
	constructor() {
		this.size = 0;
		this.dummyHead = new MyNode(null, null);
	}
	// 向特定位置添加一个节点
	add(index: number, node: MyNode) {
		if (index < 0 || index > this.size) throw new Error('index非法');
		let pre = this.dummyHead;
		for (let i = 0; i < index; i++) pre = pre.next as MyNode;
		node.next = pre.next;
		pre.next = node;
		this.size++;
	}
	// 头部插入一个节点
	addAtHead(node: MyNode) {
		this.add(0, node);
	}
	// 尾部插入一个节点
	addAtTail(node: MyNode) {
		this.add(this.size, node);
	}
	// 删除特定位置的节点
	remove(index: number) {
		if (index < 0 || index > this.size) throw new Error('index非法');
		let pre = this.dummyHead;
		for (let i = 0; i < index; i++) pre = pre.next as MyNode;
		let delNode = pre.next as MyNode;
		pre.next = delNode.next;
		delNode.next = null;
		this.size--;
	}
	// 删除头节点
	removeHead() {
		this.remove(0);
	}
	// 删除尾节点
	removeTail() {
		this.remove(this.size - 1);
	}
	// 链表长度
	getSize() {
		return this.size;
	}
	// 链表是否为空
	isEmpty() {
		return this.size === 0;
	}
	// 输出链表的字符串
	toString() {
		let str = '';
		let cur: null | MyNode = this.dummyHead.next;
		while (cur !== null) {
			str += `${cur.val}->`;
			cur = cur.next;
		}
		str += 'null';
		return str;
	}
}
