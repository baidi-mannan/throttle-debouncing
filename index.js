console.log("hello JS")

let inputDiv = document.getElementById('text')
let button = document.getElementById('button')
let numClicked = document.getElementById('clicked')
let numTriggered = document.getElementById('triggered');
let numThrottled = document.getElementById('throttled');
let clickedTime = 0;
let triggeredTime = 0;
let throttledTime = 0;
let timer = null;
let isTimePassed = true;
const buttonClicked = () => {
    ++clickedTime;
    numClicked.innerHTML = clickedTime;
    if (isTimePassed) {
        isTimePassed = false;
        setTimeout(() => {
            isTimePassed=true;
            ++throttledTime;
            numThrottled.innerHTML=throttledTime;
            

        }, 300)
    }
    if (timer) {
        clearTimeout(timer)
    }

    timer = setTimeout(() => {
        ++triggeredTime;
        numTriggered.innerHTML = triggeredTime;

    }, 300)



}

button.addEventListener('click', buttonClicked)