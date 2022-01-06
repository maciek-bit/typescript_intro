var userInput;
var userName;
userInput = "Maciej";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { errorMessage: message, errorCode: code };
}
generateError("Uwaga", 123);
