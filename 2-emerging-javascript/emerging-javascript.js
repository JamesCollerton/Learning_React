const contantString = "Constant"

function demo() {
    constantFunction()
    lexicalScopingAndTemplateStrings()
    defaultParameters()
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
    console.log(contantString)
}

demo()