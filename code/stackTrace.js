var inseq = [1,2,3,4,5];
var outseq = [4,5,3,1,2];

var check = function (inseq, outseq) {
    var temp = [];
    var ret;
    var j = 0, i = 0;
    while(true){
        if(temp[temp.length - 1] == outseq[j]){
            j ++;
            temp.pop();
        }else{
            temp.push(inseq[i]);
            i ++;
        }

        if(temp.length == 0 && i == inseq.length){
            ret = true;
            break;
        }
        if(i == inseq.length && temp[temp.length - 1] != outseq[j]){
            ret = false;
            break;
        }
    }
    return ret;
}

console.log(check(inseq,outseq));
