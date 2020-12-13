// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class SLL {
    constructor(){
        this.head = null;
    }
    addToFront(value){
        var new_node = new Node(value);
        if(this.head == null){
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
}


// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

class SLL {
    // constructor, other methods, removed for brevity
     removeFront() {
    	if(this.head) {
            this.head = this.head.next;
        }
        return this.head
    }
 }


//  Front
//  Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
 
class SLL {
    // constructor, other methods, removed for brevity
     front() {
        if(this.head) {
            return this.head.value;
        }
        return null;
    }
}

