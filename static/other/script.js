// // function functionConvertText(value){
// //     return value.toUpperCase()
// // }


// // var result = functionConvertText('66');
// // console.log(result);



// // console.log(a)
// // let a = 5;

// let array = [1,2,3,4]
// // let [a,b,c] = array;
// // console.log(a,' and ',b,c)



// myChunk = (array,k) => {
//     let n = array.length;
//     let arr1 = [], arr2 = [];
//     for (let i = 0; i <n; i++){
//         (i<k)? arr1.push(array[i]):arr2.push(array[i])
//     }

//     return [arr1,arr2];
// }

// // a = myChunk(array,5);
// // console.log(a)


// // let b = array.reduce((a,c) => a+c, 0)
// // console.log(b);


// function myReduce(array,myFunction, acc){
//     let i = 0;
//     if (acc === undefined){
//         acc = array[0];
//         i = 1;
//     }

//     for (i;i<array.length;i++){
//         console.log(i);
//         console.log(acc)
//         acc = myFunction(acc,array[i])
//     }

//     return acc
// }

// // let red = myReduce(array, ((a,b) => a+b));
// // console.log(red);


// function myFilter(array,myFunction){
//     let acc  = [];
//     for (let i =0; i< array.length; i++){
//         if (myFunction(array[i])){
//             acc.push(array[i])
//         }
//     }
//     return acc
// }

// let tt = myFilter(array, a=>a+2)
// console.log(tt)

// ttt = array.filter(v=> v+2);
// console.log(ttt)

// function myFind(obj, myFunc, index){
//     if(index === undefined){
//         index = 0;
//     }

//     keys = Object.keys(obj)

//     for (i=index; i<keys.length; i++){
//         if(myFunc(obj[i])){
//             return obj[i]
//         }
//     }
// }

// // var users = [
// //     { 'user': 'barney',  'age': 36, 'active': true },
// //     { 'user': 'fred',    'age': 40, 'active': false },
// //     { 'user': 'pebbles', 'age': 1,  'active': true }
// //   ];

// //   let yy = myFind(users, function(o) { return o.age < 40; })
// //   console.log(yy)

// function mySum(arr){
//     let sum = 0;

//     for (num of arr){
//         sum += num
//     }

//     return sum
// }

// let sum = mySum(array)
// console.log(sum)

myf = (a,b)=> {
    return a+b
}

console.log(myf('hi', ' hello'))
console.log(myf(2,4))