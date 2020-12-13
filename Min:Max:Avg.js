// SList: Max
// Create method max() to return list’s largest val.

class SLL {
    // constructor, other methods, removed for brevity
    max() {
    	// identify the largest value in the list
    }
 }


//  SList: Min
// Create min(node) to return list’s smallest val.

class SLL {
    // constructor, other methods, removed for brevity
    min() {
    	// identify the smallest value in the list
    }
 }


//  SList: Average
// Create average() to return average val.

class SLL {
    // constructor, other methods, removed for brevity
    average() {
    	// what is the average value in my list?
    }
 }

 maxMinAvg() {
     var sum = 0;
     var max = this.head.value;
     var min = this.head.value;
     var runner = this.head;
     while(runner) {
         sum += runner.value;
         if(runner.value > max) {
             max = runner.value;
         }
         else if(runner.value < min) {
             min = runner.value;
         }
         runner = runner.next
     }
     return 'max:${max}, min:${min},avg:${sum/this.length()}'
 }
