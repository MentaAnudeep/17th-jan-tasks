let arr = [10,20,20,30,30,40,50,50];

let len = arr.length;
let dummy = [];
var removeDulicate = function(arr,len){
    var temp = [];  
        var l = 0;  
        for (var i=0; i<len-1; i++){  
            if (arr[i] != arr[i+1]){  
                temp[l++] = arr[i];  
            }  
         }  
        temp[l++] = arr[len-1];     
          
        for (i=0; i<l; i++){  
            dummy[i] = temp[i];  
        }  
        return dummy; 
}

let output = removeDulicate(arr,len);
console.log(output.join(' '));