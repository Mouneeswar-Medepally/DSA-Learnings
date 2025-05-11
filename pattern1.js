/*

Problem : 
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
*****
*****
*****
*****
*****
*/

function solution1(n) {
    for (let i = 0; i < n; i++) {
        let output=""
        for(let j=0;j<n;j++){
            output+="*"
        }
        console.log(output)
        
    }
}

function solution2(n){
     for (let i = 0; i < n; i++) {
       console.log("*".repeat(n))  
    } 
}