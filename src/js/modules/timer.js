
function timer () {
    const endDate = new Date('July 10, 2024, 23:59:59');
    

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateTimer() {
  let now = new Date();
  let timeDiff = endDate - now;

  if ( timeDiff <= 0 ) {
    daysElement.innerText = '0';
    hoursElement.innerText = '0';
    minutesElement.innerText = '0';
    secondsElement.innerText = '0';
    clearInterval(countDown);
    return;
  }

  let days = timeDiff / 1000 / 60 / 60 / 24;
  days = Math.floor(days);
  let hours = (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  hours = Math.floor(hours);
  let minutes = (timeDiff % (1000 * 60 * 60)) / (1000 * 60);
  minutes = Math.floor(minutes);
  let seconds = (timeDiff % (1000 * 60)) / 1000;
  seconds = Math.floor(seconds);

  daysElement.innerText = days < 10 ? '0' + days : days;
  hoursElement.innerText = hours < 10 ? '0' + hours : hours;
  minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
  secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
  

}

updateTimer();

let countDown = setInterval(updateTimer, 1000);
}

export default timer;