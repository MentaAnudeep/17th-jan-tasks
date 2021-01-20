let arr = [2,3,6,7,13,21,67,103];
let dummy = [];
let result;
var prime = function(a){
    var isprime = true;
    for(var i = 2 ; i < a ; i++)
    {
        if(a % i === 0)
        {
            isprime = false;
            break;
        }
    }
    if(isprime === true)
    {
          dummy.push(a);
          //break;
       }
}

for( var j = 0 ; j < arr.length ; j++)
{
    prime(arr[j]);
}
console.log(dummy.join(' '));