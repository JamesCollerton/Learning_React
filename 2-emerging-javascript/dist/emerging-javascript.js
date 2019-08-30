"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var constantString = "Constant";

function demo() {
    constantFunction();
    lexicalScopingAndTemplateStrings();
    defaultParameters();
    arrowFunctions([1, 2, 3]);
    destructuring();
    destructuringFunctions();
    destructuringArrays();
    objectLiteralEnhancement();
    spreadOperator();
    spreadOperatorFunction("One", "Two", "Three");
}

function spreadOperatorFunction() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.log("Args: " + args.join(", "));
}

function spreadOperator() {

    var arrA = ["One", "Two", "Three"];
    var arrB = ["Four", "Five", "Six"];

    var arr = [].concat(arrA, arrB);

    var _arr = _toArray(arr),
        first = _arr[0],
        rest = _arr.slice(1);

    var _reverse = [].concat(_toConsumableArray(rest)).reverse(),
        _reverse2 = _slicedToArray(_reverse, 1),
        last = _reverse2[0];

    console.log("Last: " + last);
}

function objectLiteralEnhancement() {

    var name = "Bill";
    var age = 77;

    var print = function print() {
        console.log("Name: " + this.name + ", Age: " + this.age);
    };

    var person = {
        name: name,
        age: age,
        print: print
    };

    person.print();
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