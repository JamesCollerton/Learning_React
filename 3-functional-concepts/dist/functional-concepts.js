"use strict";

function demo() {

    immutableExample();
}

function immutableExample() {

    var immutableObject = {
        name: "James",
        age: 100,
        string: function string() {
            return "Name: " + this.name + ", Age: " + this.age;
        }
    };

    var rename = function rename(o, n) {
        return Object.assign({}, o, { name: n });
    };

    console.log("New object: " + rename(immutableObject, "Jacob").string());
}

demo();