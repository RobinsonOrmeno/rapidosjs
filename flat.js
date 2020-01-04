let arr = [5,5,5,[4,2,3,[[2,2,2],4,2,3]]];
arr = arr.flat(Infinity)

arr.map(item => console.log(item))
//console.log(arr)



let arr2 = ["HOLA MUNDO", "CHAO MUNDO"];
arr2 = arr2.map(item => item.split(" "));
console.log(arr2);