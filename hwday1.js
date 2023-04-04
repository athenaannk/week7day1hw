//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/




    //Your code goes here

function findWords(){
    for (let i = 0; i < dog_names.length; i++); 
        let dog_name = dog_names[i];
        if (dog_string.toLowerCase().includes(dog_name.toLowerCase()))
            console.log(`Matched ${dog_name}`);
        else {
            console.log('No Matches')
            }
   
        }
        
    

//Call method here with parameters
dog_name = 'Chuckie'
dog_string = 'Is Chuckie the best boy in the whole wide world?'
console.log(findWords)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (var i = 0; i < arr.length; i++) {
        if(i % 2 === 0) { // index is even
            console.log("even index");
        }
    }
}
console.log(replaceEvens)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//Code Wars Question 1: Summation
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }

  //Code Wars Question 2: Sum of positive
  //You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr);{
    sum = 0
    for (a in arr);{

    }   if(a>0){
        console.log(sum+arr)

    }
    console.log(sum)
}
