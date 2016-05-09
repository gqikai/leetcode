var arr = [3,4,5,6,1,2];

var BinarysearchTwistedArray = function(arr){
    var i = 0,j = arr.length - 1;
    while(j != i + 1){
        var middle = Math.floor((i + j) / 2);
        if(arr[middle] > arr[i]){
            i =  middle;
        }else{
            j = middle;
        }
    }
    return arr[j];
}

console.log(BinarysearchTwistedArray(arr));