let arr1 = [1,2,3];
let arr2 = [4,5,6];

let l1 = arr1.length;
let l2 = arr2.length;
let arr3 = [];
var mergearrays = function(arr1,arr2,l1,l2,arr3){
    var i = 0, j = 0, k = 0; 

    while (i<l1 && j <l2) 
    { 
        if (arr1[i] < arr2[j]) 
            arr3[k++] = arr1[i++]; 
        else
            arr3[k++] = arr2[j++]; 
    } 
  
    while (i < l1) 
        arr3[k++] = arr1[i++]; 
  
    while (j < l2) {
        arr3[k++] = arr2[j++];
    }
    
    return arr3;
}

var result = mergearrays(arr1,arr2,l1,l2,arr3);

let l3 = result.length;

if(l3 % 2 === 0)
{
    let mid = l3 / 2;
    let median = (result[mid] + result[mid-1]) / 2;
    console.log(median.toFixed(2));
}
else
{
    let mid = Math.floor(l3 / 2);
    let median = (result[mid] + result[mid+1]) / 2;
    console.log(median.toFixed(2));    
}