function demo() {

    immutableExample()
    pureFunction()
    dataTransformations()
    currying()
    fibonacci(5)

}

// 1, 1, 2, 3, 5, 8
function fibonacci(n) {

    function go(a, b, step) {
        if(step == 0) {
            return a + b
        }
        return go(b, a + b, step - 1)
    }

    console.log(`Fibonacci ${go(1, 1, n - 2)}`)

}

function currying() {

    const append = firstPart => secondPart => `${firstPart} ${secondPart}`

    const helloCurried = append("Hello")
    const helloWorldCurried = helloCurried("World")

    const helloWorld = append("Hello")("World")

    console.log(`Currying ${helloWorldCurried}, ${helloWorld}`)
}

function dataTransformations() {

    const colors = [
        "red",
        "yellow",
        "green",
        "pink"
    ]

    const result = colors.map(s => s.toUpperCase())
                            .filter(s => s != "YELLOW")
                            .reduce((previous, next) => `${previous}, ${next}`)

    console.log(`Data transform result: ${result}`)
}

function pureFunction() {

    const fred = {
        name: "Fred",
        canRead: false,
        canWrite: false
    }

    const educate = (person) => ({
        ...person,
        canRead: true,
        canWrite: true
    })

    const educatedFred = educate(fred)
    console.log(`Educated Fred: read ${educatedFred.canRead}, write ${educatedFred.canWrite}`)

}

function immutableExample() {

    let immutableObject = {
        name: "James",
        age: 100,
        string: function() {
            return `Name: ${this.name}, Age: ${this.age}`
        }
    }

    const rename = (o, n) => 
        ({
            ...o,
            n
        })

    console.log(`New object: ${rename(immutableObject, "Jacob").string()}`)

}

demo()