import { test, expect } from 'vitest';
import { MyNode, LinkedList } from './LinkedList';

test('LinkedList', () => {
	let n1 = new MyNode(1, null);
	let n2 = new MyNode(2, null);
	let n3 = new MyNode(3, null);
	let n4 = new MyNode(4, null);

	let list = new LinkedList();
	list.addAtHead(n1);
	list.addAtHead(n2);
	list.addAtTail(n3);
	list.addAtTail(n4);

	expect(list.toString()).toBe('2->1->3->4->null');

	list.remove(3);
	expect(list.toString()).toBe('2->1->3->null');
	expect(list.getSize()).toBe(3);

	list.reverse();
	expect(list.toString()).toBe('3->1->2->null');
});
