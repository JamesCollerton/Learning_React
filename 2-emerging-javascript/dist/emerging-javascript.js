"use strict";

var constantString = "Constant";

function demo() {
    constantFunction();
    lexicalScopingAndTemplateStrings();
    defaultParameters();
    arrowFunctions([1, 2, 3]);
}

function arrowFunctions(arrArgument) {
    console.log("Sum: " + functionalSum(arrArgument));
}

function functionalSum(arrArgument) {
    sum = function sum(a) {
        return a.reduce(function (total, number) {
            return total + number;
        });
    };
    return sum(arrArgument);
}

function defaultParameters() {
    var parameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Parameter";

    console.log("Default parameter: " + parameter);
}

function lexicalScopingAndTemplateStrings() {
    var outer = 0;
    var inner = 0;

    for (var i = 0; i < 3; i++) {
        var outer = i;
        var _inner = i;
    }

    console.log("Outer: " + outer);
    console.log("Inner: " + inner);
}

function constantFunction() {
    console.log("Constant: " + constantString);
}

demo();