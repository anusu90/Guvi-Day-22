var array = [1, 2, 3, 4, 5, 6, 7]; //sample array
//CREATING CHUNK FUNCTION
function myChunk(array, k) {
    var n = array.length;
    var arr1 = [], arr2 = [];
    for (var i = 0; i < n; i++) {
        (i < k) ? arr1.push(array[i]) : arr2.push(array[i]);
    }
    return [arr1, arr2];
}
//CREATING REDUCER FUNCTION
function myReducer(array, myFunction, acc) {
    var i = 0;
    if (acc === undefined) {
        acc = array[0];
        i = 1;
    }
    for (i; i < array.length; i++) {
        acc = myFunction(acc, array[i]);
    }
    return acc;
}
// CREATING FILTER FUNCTION
function myFilterer(array, myFunction) {
    var acc = [];
    for (var i = 0; i < array.length; i++) {
        if (myFunction(array[i])) {
            acc.push(array[i]);
        }
    }
    return acc;
}
//CREATING FINDER FUNCTION
function myFinder(obj, myFunc, index) {
    if (index === undefined) {
        index = 0;
    }
    var keys = Object.keys(obj);
    for (var i = index; i < keys.length; i++) {
        if (myFunc(obj[i])) {
            return obj[i];
        }
    }
}
//CREATING SUMMING FUNCTION
function mySums(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    return sum;
}
// NOW WE WILL CALL INDIVIDUAL FUNCTIONS AND PRINT THEIR RESULT IN CONSOLE
// let chunked = myChunk(array,2)
// let red = myReducer(array,(a,c)=>a+c, 0)
