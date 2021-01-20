let arr = [1,2,3,4,5,6,7,8,9,10];

let dummy = [];

var k = function(l){
    if(l % 2 !== 0)
    {
        return l;
    }
}
for(var i = 0 ; i < arr.length ; i++)
{
   var temp = k(i);
   dummy.push(temp);
    
}
console.log(dummy.join(' '));