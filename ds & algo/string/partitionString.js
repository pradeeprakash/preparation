// Input: s = "abacaba"
// Output: 4

function partitionString(str =""){
    const length = str.length;
    let minLen = 0;
    let temp = "";
   if(length){
      for(let i=0;i<length;i++){
        if(temp.includes(str[i])){
                minLen++;
                temp = str[i];   
        }
        else {
            temp = temp+str[i];
        }
      }
   }
   return minLen + 1;
}


const input = "ssssss";
console.log(partitionString(input))