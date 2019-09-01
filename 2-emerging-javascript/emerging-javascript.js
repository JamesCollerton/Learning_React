const constantString = "Constant"

function demo() {
    constantFunction()
    lexicalScopingAndTemplateStrings()
    defaultParameters()
    arrowFunctions([1, 2, 3])
    destructuring()
    destructuringFunctions()
    destructuringArrays()
    objectLiteralEnhancement()
    spreadOperator()
    spreadOperatorFunction("One", "Two", "Three")
    promiseExample()
    classExample()
}

function classExample() {

    class HiddenClass {

        constructor(str) {
            this.str = str
        }
        
        print() {
            console.log(`String ${this.str}`)
        }

    }

    class ExtendedClass extends HiddenClass {

        constructor(str) {
            super(str)
        }

        print() {
            super.print()
        }

    }

    const hiddenClass = new HiddenClass("Class Input")
    const extendedClass = new ExtendedClass("Another Class Input")

    hiddenClass.print()
    extendedClass.print()

}

function promiseExample() {

    const asyncFunction = (str) => new Promise((resolves, rejects) => {
        var millisecondsToWait = 500;
        setTimeout(function() {
            resolves(str)
            rejects("Should not occur")
        }, millisecondsToWait);
    })

    asyncFunction("World").then(
        str => console.log(`Async Hello ${str}`),
        err => console.log(`Error ${err}`)
    )

}

function spreadOperatorFunction(...args) {

    console.log(`Args: ${args.join(", ")}`)

}

function spreadOperator() {

    let arrA = ["One", "Two", "Three"]
    let arrB = ["Four", "Five", "Six"]

    let arr = [...arrA, ...arrB]

    let [first, ...rest] = arr
    let [last] = [...rest].reverse()

    console.log(`Last: ${last}`)

}

function objectLiteralEnhancement() {

    let name = "Bill"
    let age = 77

    let print = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }

    let person = {
        name,
        age,
        print
    }

    person.print()

}

function destructuringArrays() {

    let arr = [1,2,3]

    let [firstElement] = arr
    let [,,thirdElement] = arr

    console.log(`First element ${firstElement}`)
    console.log(`Third element ${thirdElement}`)

}

function destructuringFunctions() {

    let person = {
        name: "James",
        age: 100,
        weight: 99 
    }

    let lordify = ({name}) => `Lord ${name}`

    console.log(lordify(person))
}

function destructuring() {

    let person = {
        name: "James",
        age: 100,
        weight: 99 
    }

    let {name, age} = person

    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)

}

function arrowFunctions(arrArgument) {
    console.log(`Sum: ${functionalSum(arrArgument)}`)
}

function functionalSum(arrArgument) {
    sum = (a) => a.reduce((total, number) => total + number)
    return sum(arrArgument)
}

function defaultParameters(parameter = "Parameter") {
    console.log(`Default parameter: ${parameter}`)
}

function lexicalScopingAndTemplateStrings() {    
    var outer = 0;
    var inner = 0;

    for(var i = 0; i < 3; i++) {
        var outer = i
        let inner = i
    }

    console.log(`Outer: ${outer}`)
    console.log(`Inner: ${inner}`)
}

function constantFunction() {
    console.log(`Constant: ${constantString}`)
}

demo()