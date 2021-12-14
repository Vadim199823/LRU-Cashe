class ListNode {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.length = 0;
		this.head = this.tail = null;
	}
	push(node) {
		if (!this.head) {
			this.head = this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
	}
	shift() {
		const head = this.head;
		this.splice(this.head);
		return head;
	}
	splice(node) {
		if (!node.prev && !node.next) {
			this.head = this.tail = null;
		} else if (!node.next) {
			this.tail = node.prev;
			this.tail.next = null;
		} else if (!node.prev) {
			this.head = node.next;
			this.head.prev = null;
		} else {
			const next = node.next;
			const prev = node.prev;
			prev.next = next;
			next.prev = prev;
			node.next = node.prev = null;
		}
		this.length--;
	}
}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.q = [];
		this.m = {};
	}
	get(key) {
		if (!this.m[key]) {
			return -1;
		}
		const value = this.m[key].value;
		this.put(key, value);
		return value;
	}
	put(key, value) {
		if (this.m[key]) {
			this.q.splice(this.q.findIndex(node => node === this.m[key]), 1);
			this.m[key] = null;
		}
		this.q.push({ key, value });
		this.m[key] = this.q[this.q.length - 1];
		if (this.q.length > this.capacity) {
			this.m[this.q.shift().key] = null;
		}
	}
}

