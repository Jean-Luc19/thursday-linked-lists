class DoubleLinkList {
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
          previous: null
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

}
