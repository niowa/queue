const Node = require('./node');

class LinkedList {
	
      constructor() {
		this.length = 0;
		/* this._head = null;
		this._tail = null; */
	}
	
	print(node) {
		 if (node != null) {
            alert('value = ' + node._head.data);
            alert('prev = ' + (node._head.left != null ? node._head.left.data : 'null'));
            alert('next = ' + (node._head.right != null ? node._head.right.data : 'null'));
            alert('--------------');
            return;
        }
    
	}

    append(data) {
		var el = {
			data: data,
			left: null,
			right: null
		};
		
		if (this.isEmpty()) {
			this._head = this._tail = el;
			//this._tail = el;
		} else {
			this._tail.right = el;
			el.left = this._tail;
			this._tail = el;
		}
		
		this.length++
		return this;
	}

    head() {
		return this._head.data;
	}

    tail() {
		return this._tail.data;
	}

    at(index) {
		var Node = this._head;
		var i = 0;
		
		if ( index < 0 || index > this.length - 1) {
			return;
		}
		
		while (i != index) {
			Node = Node.right;
			i++;
		}
		
		return Node.data;
	}

    insertAt(index, data) {
		var el = {
			data: data,
			left: null,
			right: null
		};
		
		if (index < 0 || index > this.length - 1) {
			return;
		}
		var i = 0;
		var Node = this._head;
		
		while (i != index) {
			Node = Node.right;
			i++;
		}
		
		if (index == 0) {
			this._head.left = el;
			el.right = this._head;
			this._head = el;
			this.length++;
		}
		else if (index == this.length - 1) {
			this.append(data);
		}
		else {
			el.left = Node.left;
			el.right = Node;
			el.left.right = el;
			Node.left = el;
			this.length++;
		}
		return;
		
		
	}

    isEmpty() {
		return this.length == 0 ? true : false;
	}

    clear() {}

    deleteAt(index) {
	}

    reverse() {}

    indexOf(data) {}
	
}

module.exports = LinkedList;
