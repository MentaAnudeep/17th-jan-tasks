let arr = [10,20,30,40,50];

let len = arr.length;
let key = 3;
var output = function(arr,key){
    let i = 0;
    while(i < key)
    {
        arr.unshift(arr.pop());
        i++;
    }
    return arr;
}
var out = output(arr,key)
console.log(out.join(' '));