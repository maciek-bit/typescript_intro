function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num:number): void{
    console.log("Result = "+num);
}

printResult(add(3,4));

let combineFields: (a: number, b:number) => number;
combineFields = add;

console.log("Result_2 = " + combineFields(5,6));

function addAndHandle(n1: number, n2:number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(12, 18, (result) => {
    console.log(result);
})