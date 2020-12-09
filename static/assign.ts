let array = [1,2,3,4,5,6,7]

function myChunk (array:Array<Object>,k:Number){
    let n = array.length;
    let arr1 = [], arr2 = [];
    for (let i = 0; i <n; i++){
        (i<k)? arr1.push(array[i]):arr2.push(array[i])
    }

    return [arr1,arr2];
}


function myReducer(array:Array<Object>,myFunction, acc){
    let i = 0;
    if (acc === undefined){
        acc = array[0];
        i = 1;
    }

    for (i;i<array.length;i++){
        console.log(i);
        console.log(acc)
        acc = myFunction(acc,array[i])
    }
    return acc
}


function myFilterer(array:Array<Object>,myFunction){
    let acc  = [];
    for (let i =0; i< array.length; i++){
        if (myFunction(array[i])){
            acc.push(array[i])
        }
    }
    return acc
}

function myFinder(obj:object, myFunc, index:number){
    if(index === undefined){
        index = 0;
    }

    let keys = Object.keys(obj)

    for (let i=index; i<keys.length; i++){
        if(myFunc(obj[i])){
            return obj[i]
        }
    }
}

function mySums(arr:Array<number>){
    let sum = 0;

    for (let num of arr){
        sum += num
    }

    return sum
}