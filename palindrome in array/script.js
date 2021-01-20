let array = ['madam', 'kayak', 'level' ,'water', 'student', 'refer'];

let dummy = [];

var result = function(a){
    return a.split("").reverse().join("");
}
for(var i = 0 ; i < array.length ; i++)
{
    let word = array[i];
    let rev = result(word);
    if(rev === word)
    {
        dummy.push(word);
    }
    
}

console.log(dummy.join(' '));