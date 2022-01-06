let userInput: unknown;
let userName: string;

userInput = "Maciej";
if(typeof userInput === "string"){
    userName = userInput;
}

function generateError(message: string, code: number): never{
    throw {errorMessage: message, errorCode: code};
}

generateError("Uwaga", 123);