let array = [1,2,3,4,5,6,7] //sample array


// we will define type for the various types of function we are going to use
type functionType1 = (obj:number|object) => boolean
type functionType2 = (obj:number|string|object, arr_i:number|string|object|any) => number|string|object|any;

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

function myReducer(array:Array<object>|Array<number>,myFunction:functionType2, acc:number | string | object){
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

function myFinder(obj:Array<object>|Array<number>, myFunc:functionType1, index:number){
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


document.querySelectorAll('.btn').forEach((btn)=>{
    btn.addEventListener('click', (e) => {
        // console.log((<HTMLInputElement>e.target).value);
        giveOutput((<HTMLInputElement>e.target).value);
    });
})


let displayHTML:(val:string) => void = function(val:string){
    (<HTMLInputElement>document.getElementById("display-div")).innerHTML = `<p>The button pressed was ${val}. Check console for output</p>`
}

let giveOutput:(value:string)=>void = function (value:string){

    console.log('The button pressed was',value)

    switch (value) {
        case 'chunk':
            let ret = myChunk(array,3);
            console.log(ret);
            displayHTML(value);
            break;
            
        case 'reduce':
            let ret2 = myReducer(array,(a,c)=> a+c,0);
            console.log(ret2);
            displayHTML(value);
            break;

        case 'filter':
            let ret3 = myFilterer(array,(v => v===5));
            console.log(ret3);
            displayHTML(value);
            break;
            
        case 'finder':
            let ret4 = myFinder(array,(v=>v===2),0);
            console.log(ret4);
            displayHTML(value);
            break;
  
        case 'sum':
            let ret5 = mySums(array);
            console.log(ret5);
            displayHTML(value);
            break;
    }

}