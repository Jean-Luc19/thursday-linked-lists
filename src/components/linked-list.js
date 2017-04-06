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

    insertCycle(index,value) {
      if (index < 0 || index > this.length) {
          throw new Error('Index Error')
      }
      const newNode = {
        value,
      }
       const cycleNode = this._find(this.length - 1)
       cycleNode.next = newNode;
       newNode.next = this.head.next.next.next.next
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
//hello
    }
    findPrevious(value) {
        // return this._find(index - 1)
        let previousNode = null;
        let currentNode = this.head;
        while(currentNode !== null){
          if(this.head === null) {
            break;
          }
          if(currentNode == this.head){
            currentNode == this.head.next;
          }
          if(currentNode.value !== value) {
            previousNode = currentNode
            currentNode = currentNode.next

          }
          else return previousNode


        } // checking to see if the node contains a valu
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
//hello

    reverse() {
       let counter = 0;
       const reverseList = new LinkedList()
       const newNode = {}
       newNode.next = this.head;
       this.head = newNode
       reverseList 


       return reverseList;
    }

    hasCycle() {
      let fast = this.head.next;
      let slow = this.head;
      while(fast!== null && fast.next!== null && slow !==null) {
        if(fast === slow) {
          return true;
        }
        fast = fast.next.next
        slow = slow.next
      }
     return false

    }




}



export default LinkedList;
