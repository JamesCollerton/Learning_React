function demo() {

    immutableExample()

}

function immutableExample() {

    let immutableObject = {
        name: "James",
        age: 100,
        string: function() {
            return `Name: ${this.name}, Age: ${this.age}`
        }
    }

    const rename = (o, n) => Object.assign({}, o, {name: n}) 

    console.log(`New object: ${rename(immutableObject, "Jacob").string()}`)

}

demo()