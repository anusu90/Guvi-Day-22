let array = [1,2,3,4,5,6,7] //sample array


// we will define type for the various types of function we are going to use
type functionType1 = (obj:object) => boolean
type functionType2 = (obj:number|string|object, arr_i:number|string|object) => number|string|object;

//CREATING CHUNK FUNCTION

function myChunk (array:Array<Object>,k:Number){
    let n = array.length;
    let arr1 = [], arr2 = [];
    for (let i = 0; i <n; i++){
        (i<k)? arr1.push(array[i]):arr2.push(array[i])
    }

    return [arr1,arr2];
}

//CREATING REDUCER FUNCTION

function myReducer(array:Array<Object>,myFunction:functionType2, acc:number | string | object){
    let i = 0;
    if (acc === undefined){
        acc = array[0];
        i = 1;
    }

    for (i;i<array.length;i++){
        acc = myFunction(acc,array[i])
    }
    return acc
}

// CREATING FILTER FUNCTION

function myFilterer(array:Array<Object>,myFunction:functionType1){
    let acc  = [];
    for (let i =0; i< array.length; i++){
        if (myFunction(array[i])){
            acc.push(array[i])
        }
    }
    return acc
}

//CREATING FINDER FUNCTION

function myFinder(obj:Array<object>, myFunc:functionType1, index:number){
    if(index === undefined){
        index = 0;
    }

    let keys = Object.keys(obj)

    for (let i:number=index; i<keys.length; i++){
        if(myFunc(obj[i])){
            return obj[i]
        }
    }
}

//CREATING SUMMING FUNCTION

function mySums(arr:Array<number>){
    let sum = 0;

    for (let num of arr){
        sum += num
    }

    return sum
}

// NOW WE WILL CALL INDIVIDUAL FUNCTIONS AND PRINT THEIR RESULT IN CONSOLE

// let chunked = myChunk(array,2)
// let red = myReducer(array,(a,c)=>a+c, 0)