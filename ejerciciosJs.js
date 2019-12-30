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