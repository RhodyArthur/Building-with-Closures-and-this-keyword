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
    age: 100.
}
// using call
Person.greet.call(anotherPerson)

// using apply
Person.greet.apply(anotherPerson)

// using bind
Person.greet.call(anotherPerson)


// Event Handlers and this

// const buttonEl = document.createElement('button')
// buttonEl.setAttribute('id','btn')
// buttonEl.textContent = 'Click Me'

// document.body.appendChild(buttonEl)
// buttonEl.addEventListener('click', handleClick)


// function handleClick(){
//     console.log(this.id)
//     console.log(this.textContent)
// }






// Private Data with Closures and this
function createCounter(){
    let count = 0
    return {
        increment: function(){
            count++
            console.log(this.count)
        },
        getCount: function(){
            return count
        }
    }
}


const result = createCounter()
result.increment()
result.getCount()

// Reusable Component and Closure and this
// function createTimer(duration, elementId){
//     // const displayEl = document.querySelector(elementId)
//     for (let i = duration; i >= 0; i--){
//         this.textContent = i
//         // console.log(i)

//         if (i === 0){
//             return displayEl.textContent = 'Time elapsed'
//         }
//     }
// }
// console.log(createTimer(5))
