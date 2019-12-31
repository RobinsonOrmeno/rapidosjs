let pruebaChild = ()=>{
    let child = {a:1,b:2}
    let obj = {c:3,child}

    console.log(obj)
}

let stringTemplates = ()=>{
    var name = 'Peggy',
        pet = 'Dog',
        speak = 'Guau Guau!'

        var s = `${name} has a ${'pez'+pet} who says "${speak}".`
        console.log(s)
}

let destructuring = ()=>{
    //SIN ES6
    // var numbers = [1,2,3,4];
    // var a= numbers[00],
    //     b= numbers[01],
    //     c =numbers[02];

        // console.log(numbers, a,c,b);


        //CON ES6
        let numbers = [1,2,3,4]
        let [a,b,c] = numbers
        console.log(numbers)


        var obj = {a:1, b:2, c:3}
        let {a,b,c} = obj
        console.log(obj, c,a,b)



}


let operadorPropagacion =() =>{
    const numbers = [1,2,3,4,5]
    const [head, ...tail] = numbers
    console.log(head,tail)


}

/*
SPREAD

*/


function myfunction(x,y){
    return x + y;
}

var data = [1,2];

var result = myfunction(...data)

console.log(result);


// let array1 = [1,2,3]
// let array2 = [0,...array1,4,5]

console.log(array2)


let arrayUno = [2,3,4]
let arrayDos = [1]
arrayDos.push(...arrayUno)
console.log(arrayDos)


let array1 = [1]
let array2 = [2]
let array3 = [...array1,...array2,...[3,4]]
let array4 = [5]
let spreadsArray = (a,b,c,d,e)=>{
    return a+b+c+d+e
}
let result = spreadsArray(...array3,...array4)
console.log(result)