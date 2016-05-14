/**
 * Created by gaoqikai on 5/5/16.
 */
var S1 = " ABCBDAB";
var S2 = " BDCABA";
var Solution = "BCBA";

var m = S1.length,n = S2.length;

var arr = new Array();
for(var i = 0; i < m + 1; i ++){
    arr[i] = new Array();
    for(var j = 0; j < n + 1; j ++){
        arr[i][j] = {};
        if(i == 0||j == 0){
            arr[i][j].c = 0;
        }
    }
}
for(var i = 1; i < m; i ++){
    for(var j = 1; j < n; j ++){
        calc(S1, S2, i, j);
    }
}
function calc(S1, S2, i, j){
    if(S1[i] == S2[j]){
        arr[i][j].c = arr[i - 1][j - 1].c + 1;
        a[i][j].w = S1[i];
    }else{
        arr[i][j].c = max(arr[i - 1][j].c, arr[i][j - 1].c);
    }
}
function max(a, b){
    return a > b? a : b;
}

for(var i = 1; i < m; i ++){
    var str = '';
    for(var j = 1; j < n; j ++){
        str += arr[i][j].c;
    }
    console.log(str);
}
for(var i = 0; i < m; i ++){
    var str = '';
    for(var j = 0; j < n; j ++){
        str += arr[i][j].c;
    }
    console.log(str);
}