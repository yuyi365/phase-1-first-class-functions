const receivesAFunction = (callbackFunction) => {
    return callbackFunction();
} 

const returnsANamedFunction = () => {
    let namedFunction = () => {
        console.log("Named");
    }
    return namedFunction;
}

const returnsAnAnonymousFunction = () => {
    return function () {
        console.log("Anonymous");
    }
}