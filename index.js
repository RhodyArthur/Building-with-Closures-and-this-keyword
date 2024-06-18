<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="click-btn">Click Here!</button>

    <h1 id="timer"></h1>
    <script>
        
// Event Handlers and this
const buttonEl = document.querySelector('#click-btn')
buttonEl.addEventListener('click', handleClick)


function handleClick(){
    console.log('Button Id:',this.id)
    console.log('TextContent: ',this.textContent)
}

// Reusable Component and Closure and this
function createTimer(duration, elementId){
    const displayEl = document.querySelector(elementId)
    let timer = duration

    function countDown(){
        displayEl.textContent = timer
        timer--
        if (timer >= 0){
            setTimeout(countDown, 1000)
        }
        else {
            return displayEl.textContent = 'Time elapsed'
        }
    }
    
    countDown()  
}
createTimer(10, '#timer');
    </script>
</body>
</html>
