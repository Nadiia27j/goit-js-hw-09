import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    btnStart: document.querySelector('button[data-start]'),
    inputField: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};
 

const currentDate =  Date.now('jan 1 2021 00:00:00');
let timerId = null;

refs.btnStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(Date.parse.inputField.value < Date.parse.currentDate) {
        window.alert("Please choose a date in the future"); 
      }else{
        refs.btnStart.setAttribute('disabled', false);
      }
      console.log(selectedDates[0]);
    },
};

flatpickr(refs.inputField, {options});


refs.btnStart.addEventListener('click',onBtnClickStart);


function onBtnClickStart() {
};


// function convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     const days = addLeadingZero(Math.floor(ms / day));
//     const hours = addLeadingZero(Math.floor((ms % day) / hour));
//     const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//     const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
//     return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }













// const timer = new Timer();



// class Timer {
//     constructor() {
//         this.isActive = false;
//     }

//     start() {
//         const startTime = Date.now();

//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const { days, hours, minutes, seconds } = convertMs(deltaTime);
//             console.log(`${days}:${hours}:${minutes}:${seconds}`);
//         }, 1000);
//     }

// };

// timer.start();