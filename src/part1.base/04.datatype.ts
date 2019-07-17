let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
let num2: number =123



// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']
let arr3: (string|number)[] = ["333",3,3,3]
console.log(arr3)
// str = 123

let ss:string
ss='333'
// 元组
let tuple: [number, string] = [0, '1']
let t:[number,boolean,string,symbol] = [1,true,'1',Symbol()];
console.log(t);
// tuple.push(2)
// console.log(tuple)
// tuple[2]

// 函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b


let fn:(x:number)=>String = (t)=>'5';
console.log(fn(444))
// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

let obj2 : {x:String}
obj2={x:'3333'}


// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2)

// undefined, null
let un: undefined = undefined
let nu: null = null
num = undefined
num = null

// void
let noReturn = () => {}

// any
let x
x = 1
x = []
x = () => {}

// never
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}