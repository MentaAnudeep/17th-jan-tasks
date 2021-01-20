let arr = [1,2,3,4,5];
let sum = 0, res = 0;
var result = function(a){
    sum = sum + a;
    return sum;
}
for(var i = 0 ; i < arr.length ; i++)
{
    var k = arr[i];
   res = result(k);
}
console.log(res);
