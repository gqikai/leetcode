define(function () {
    var QuickSort = function (arr) {
        if(arr.length <= 1) return arr;
        var i = 0, j = arr.length - 1, x = arr[0];
        while(i != j){
            while(arr[j] >= x && i != j) j --;
            arr[i] = arr[j];
            while(arr[i] <= x && i != j) i ++;
            arr[j] = arr[i];
        }
        var right = QuickSort(arr.splice(i + 1, arr.length - i - 1));
        var left = QuickSort(arr.splice(0, i));

        return left.concat([x], right);
    }

    console.log(QuickSort([72,6,57,88,60,42,83,73,48,85]));
    return QuickSort;
});