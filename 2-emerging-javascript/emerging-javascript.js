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
}

function objectLiteralEnhancement() {
    
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