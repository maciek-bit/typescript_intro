// Union types
function combine(input1: number | string, input2: number | string){
    let result;
    if(typeof input1 === "number" && typeof input2 === "number"){
        result = input1 + input2;
    } else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combine(10,14));
console.log(combine("Maciej","Agnieszka"));

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combineLiteral(
    input1: Combinable, 
    input2: Combinable, 
    resultConvertion: ConversionDescriptor){
    let result;
    if(typeof input1 === "number" && typeof input2 === "number" || resultConvertion === "as-number"){
        result = +input1 + +input2;
    } else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

console.log(combineLiteral(10,14,"as-number"));
console.log(combineLiteral("Maciej","Agnieszka","as-text"));