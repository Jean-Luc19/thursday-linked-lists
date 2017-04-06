class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index Error')
        }

        const newNode = {
            value,
            // next added
        };
        if (index == 0) {
            //next contains link to next node
            newNode.next = this.head;
            this.head = newNode
        }
        else {
            const node = this._find(index - 1);
            newNode.next = node.next;
            node.next = newNode;
        }

        this.length++;
    }

    _find(index) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next
        }
        return node
    }

    get(index) {
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }
        return this._find(index).value
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index Error');
        }
        if (index === 0) {
            this.head = this.head.next
        }
        else {
            const node = this._find(index - 1);
            node.next = node.next.next
        }
        this.length--;
    }
    display() {

        for (let i = 0; i < this.length; i++) {
            console.log(this.get(i))
        }

    }
    findPrevious(index) {
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }
        return this._find(index - 1)
    }
    isEmpty() {
        if(this.head === null) {
            return true
        }
        else return false
    }
    size() {
        let counter = 0;
        let currentNode = this.head;
        while(true) {
            if (this.head === null) {
                break;
            }
            if (currentNode == this.head) {
                currentNode = this.head.next;
            }
            if (currentNode !== null) {
                currentNode = currentNode.next
            }
            else{
                break;
            }
            counter++
        }
        return counter
    }
    findMiddle() {
        let counter = 0;
        let currentNode = this.head;
        while(currentNode.next != null){
            currentNode = this._find(counter)
            counter++
        }
        return this._find(Math.floor(counter/2)).value
    }


}


export default LinkedList;
