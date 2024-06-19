const Person = {
    name: 'Rhoda',
    age: 11,
    greet : function(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)}
}

// call greet method directly on Person object
Person.greet()

const anotherPerson = {
    name: 'Esi',
    age: 100
}
// using call
Person.greet.call(anotherPerson)

// using apply
Person.greet.apply(anotherPerson)

// using bind
const p1 = {
    name: 'Bob',
    age:2
}
const p = Person.greet.bind(p1)
p()





// Private Data with Closures and this
function createCounter(){
    let count = 0
    return {
        increment: function(){
            count++
            console.log(this.count)
            // this.count returns undefined because count is a variable and not an object property of the returned value from createCounter
        },
        getCount: function(){
            return count
        }
    }
}


const result = createCounter()
result.increment()
result.getCount()

