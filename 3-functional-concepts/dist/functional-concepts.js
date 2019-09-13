"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function demo() {
  immutableExample();
  pureFunction();
  dataTransformations();
}

function dataTransformations() {
  var colors = ["red", "yellow", "green", "pink"];
  var result = colors.map(function (s) {
    return s.toUpperCase();
  }).filter(function (s) {
    return s != "YELLOW";
  }).reduce(function (previous, next) {
    return "".concat(previous, ", ").concat(next);
  });
  console.log("Data transform result: ".concat(result));
}

function pureFunction() {
  var fred = {
    name: "Fred",
    canRead: false,
    canWrite: false
  };

  var educate = function educate(person) {
    return _objectSpread({}, person, {
      canRead: true,
      canWrite: true
    });
  };

  var educatedFred = educate(fred);
  console.log("Educated Fred: read ".concat(educatedFred.canRead, ", write ").concat(educatedFred.canWrite));
}

function immutableExample() {
  var immutableObject = {
    name: "James",
    age: 100,
    string: function string() {
      return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    }
  };

  var rename = function rename(o, n) {
    return _objectSpread({}, o, {
      n: n
    });
  };

  console.log("New object: ".concat(rename(immutableObject, "Jacob").string()));
}

demo();