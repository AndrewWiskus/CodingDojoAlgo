// Length
// Create a new SLL method length() that returns number of nodes in that list.

class SLL {
    // constructor, other methods, removed for brevity
    length() {
        // how many nodes are in my list?
        var counter = 0;
        var runner = this.head;
        while(runner !== null){
            counter++;
            runner = runner.next;
        }
        return counter;
    }
 }
