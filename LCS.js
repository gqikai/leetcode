/**
 * Created by gaoqikai on 5/5/16.
 */
var S1 = "ABCBDAB";
var S2 = "BDCABA";
var Solution = "BCBA";

var m = S1.length,n = S2.length;

var arr = new Array();
for(var i = 0; i < m; i ++){
    arr[i] = new Array();
    for(var j = 0; j < n; j ++){
        arr[i][j] = {};
        if(i == 0||j == 0){
            arr[i][j].c = 0;
        }
    }
}

function

console.log(arr);