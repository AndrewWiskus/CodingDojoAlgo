// Display
// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

displayList(){
    if(this.head == null){
        console.log('Empty List');
        return this;
        var runner = this.head;
        while(runner !== null){
            console.log('Node:${runner.value}');
            runner = runner.next;
        }
        return this;
    }
}