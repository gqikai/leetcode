var v1 = []
var v2 = {};
var v3 = {};
function foo(v1, v2, v3)
{
    v1 = [1];
    v2 = [2];
    v3 = {a:3}
}

foo(v1, v2, v3);
console.log(v1); // 空白 
console.log(v2); // [object Object] 
console.log(v3.a); // undefined