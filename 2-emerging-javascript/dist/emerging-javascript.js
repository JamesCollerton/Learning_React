"use strict";

var constantString = "Constant";

function demo() {
    constantFunction();
    lexicalScopingAndTemplateStrings();
    defaultParameters();
    arrowFunctions([1, 2, 3]);
    destructuring();
    destructuringFunctions();
    destructuringArrays();
}

function destructuringArrays() {

    var arr = [1, 2, 3];

    var firstElement = arr[0];
    var thirdElement = arr[2];


    console.log("First element " + firstElement);
    console.log("Third element " + thirdElement);
}

function destructuringFunctions() {

    var person = {
        name: "James",
        age: 100,
        weight: 99
    };

    var lordify = function lordify(_ref) {
        var name = _ref.name;
        return "Lord " + name;
    };

    console.log(lordify(person));
}

function destructuring() {

    var person = {
        name: "James",
        age: 100,
        weight: 99
    };

    var name = person.name,
        age = person.age;


    console.log("Name: " + name);
    console.log("Age: " + age);
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