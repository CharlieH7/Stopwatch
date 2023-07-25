const timerMilliseconds = document.querySelector(".timer__milliseconds")
const timerSeconds = document.querySelector(".timer__seconds")
const timerMinutes = document.querySelector(".timer__minutes")

let cancelId;
let startTime;
let savedTime = 0;

function startTimer() {
    startTime = Date.now();
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
    savedTime = savedTime + Date.now() - startTime
    console.log(savedTime);
    cancelAnimationFrame(cancelId);
}

function resetTimer() {
    savedTime = 0
    startTime = Date.now();
    timerMilliseconds.innerHTML = '000'
    timerSeconds.innerHTML = '00'
    timerMinutes.innerHTML = '00'
}

function updateTimer() {
    let millisElapsed = savedTime + (Date.now() - startTime);
    let secondElapsed = millisElapsed / 1000 ;
    let minutesElapsed = secondElapsed / 60;

    let minutesText = Math.floor(minutesElapsed)
    let secondsText = Math.floor(secondElapsed % 60)
    let millisText = millisElapsed % 1000;

    if (minutesText.toString().length === 1) {
        minutesText = '0' + minutesText;
    }
    if (secondsText.toString().length === 1) {
        secondsText = '0' + secondsText;
    }
    if (millisText.toString().length < 3) {
        millisText =  millisText.toString().padStart(3, '0');
    }

    timerMilliseconds.innerHTML = millisElapsed % 1000;
    timerSeconds.innerHTML = secondsText;
    timerMinutes.innerHTML = minutesText;
    cancelId = requestAnimationFrame(updateTimer);
}