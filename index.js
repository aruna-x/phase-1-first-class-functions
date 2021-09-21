function receivesAFunction (callback) {
    callback();
}

function returnsANamedFunction () {
    return function myFunction() {
        return 5;
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        const a = "test";
        const b = "test1";
    }
}