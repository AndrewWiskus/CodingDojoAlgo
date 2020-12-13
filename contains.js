// Contains
// Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

contains(value){
    var runner = this.head;
    while(runner 1== null){
        if(runner.value == value){
            return true;
        }
        runner = runner.next;
    }
    return false;
}