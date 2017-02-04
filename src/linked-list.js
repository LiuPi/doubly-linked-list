const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var dataNode = new Node(data);
        if (this.length === 0){
            this._head = dataNode;
            this._tail = dataNode;
        }
        else{
            this._tail.next = dataNode;
            dataNode.prev = this._tail;
            this._tail = dataNode;
        }
        this.length += 1;
        return this;
    }

    head() {
        if (this.length > 0){
            return this._head.data;
        }
        else{
            return null;
        }

    }

    tail() {
        if (this.length > 0) {
            return this._tail.data;
        }
        else{
            return null;
        }
    }

    at(index) {
        if ((this.length === 0)||(index >= this.length)||(index < 0)){
            return null;
        }
        var currentNode = this._head;
        var count = 0;
        while (count < index){
            currentNode = currentNode.next;
            count += 1;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        if ((this.length === 0)||(index >= this.length)||(index < 0)){
            return this;
        }
        var dataNode = new Node(data);
        var currentNode = this._head;
        var count = 0;
        while (count < index){
            currentNode = currentNode.next;
            count += 1;
        }
        currentNode.prev.next = dataNode;
        dataNode.prev = currentNode.prev;
        dataNode.next = currentNode;
        currentNode.prev = dataNode;

        this.length += 1;
        return this;
    }

    isEmpty() {
        return (this.length === 0);
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (this.isEmpty()||(index >= this.length)||(index < 0)){
            return this;
        }
        if (this.length === 1){
            this.clear();
            return this;
        }
        var deleteNode = this._head;
        if (index === 0){
            this._head = deleteNode.next;
            this._head.prev = null;
        }
        else if (index === (this.length-1)) {
            deleteNode = this._tail;
            this._tail = deleteNode.prev;
            this._tail.next = null;
        }
        else {
            var count = 0;
            while (count < index){
                deleteNode = deleteNode.next;
                count += 1;
            }
            deleteNode.prev.next = deleteNode.next;
            deleteNode.next.prev = deleteNode.prev;
        }
        this.length -= 1;

        return this;
    }

    reverse() {
        if (this.isEmpty()){
            return this;
        }
        var p = null;
        var currentNode = this._head;
        while(currentNode !== null){
            p = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = p;
            currentNode = currentNode.prev;
        }
        p = this._head;
        this._head = this._tail;
        this._tail = p;

        return this;
    }

    indexOf(data) {

        var dataNode = this._head;
        var i = 0;
        while (dataNode != null){
            if (dataNode.data === data){
                return i;
            }
            dataNode = dataNode.next;
            i += 1;
        }

        return -1;
    }
}

module.exports = LinkedList;
