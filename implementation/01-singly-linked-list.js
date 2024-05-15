// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {

        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.length++;
        this.head = newNode;
        return this;

        // Add node of val to head of linked list
        // let newNode = new SinglyLinkedNode(val)
        // this.length++


        // if (this.head === null) {
        //     this.head = newNode
        //     return this
        // }

        // newNode.next = this.head
        // this.head = newNode

        // return this

        // Your code here

        // Write your hypothesis on the time complexity of this method here



    }

    addToTail(val) {

        let newNode = new SinglyLinkedNode(val);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;

    return this;
  }
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        // let newNode = new SinglyLinkedNode(val);

        // this.length++

        // if (this.head === null) {
        //     this.head = newNode;
        //     return this
        // }

        // let curr = this.head;
        // while (curr.next) {
        //     curr = curr.next;
        // }
        // curr.next = newNode;



        // Write your hypothesis on the time complexity of this method here



    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            return undefined
        } else {
            let removedHead = this.head
            if (this.head) this.head = this.head.next
            this.length--
            return removedHead
        }
        
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) {
            return undefined;
        } else if (this.length === 1) {
            let removedTail = this.head
            this.head = null
            this.length = 0
            return removedTail
        } else {
            let removedTail
            let curr = this.head
            while (curr.next.next) {
                curr = curr.next
            }
            removedTail = curr.next
            curr.next = null
            this.length--
            return removedTail
        }
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node
        if (!this.head) {
            return undefined
        } else {
            return this.head.value 
        }

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let curr = this.head
        while (curr) {
            console.log(`${curr.value}`)
            curr = curr.next
        }

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
